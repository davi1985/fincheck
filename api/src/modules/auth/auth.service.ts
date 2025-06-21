import { compare, hash } from 'bcryptjs';

import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type User } from '@prisma/client';

import { UsersRepository } from '../../shared/database/repositories/users/users.repositories';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin({ email, password }: SignInDto) {
    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.validatePassword(password, user);

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async signup({ name, email, password }: SignUpDto) {
    const emailExists = await this.usersRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailExists) {
      throw new ConflictException('This Email already in use');
    }

    const hashedPassword = await this.encryptPassword(password);

    const user = await this.usersRepository.create({
      data: {
        email,
        name,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              { name: 'Salário', icon: 'travel', type: 'INCOME' },
              { name: 'Freelance', icon: 'travel', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              { name: 'Casa', icon: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
            ],
          },
        },
      },
    });

    const accessToken = await this.generateAccessToken(user.id);

    return {
      accessToken,
    };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }

  private async encryptPassword(passPlainText: string) {
    return hash(passPlainText, 12);
  }

  private async validatePassword(password: string, user: User) {
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
