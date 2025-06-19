import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare } from 'bcryptjs';
import { type User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate({ email, password }: AuthenticateDto) {
    const user = await this.usersRepository.findByEmail({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.validatePassword(password, user);

    const accessToken = await this.jwtService.signAsync({ sub: user.id });

    return { accessToken };
  }

  private async validatePassword(password: string, user: User) {
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
