import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

interface AuthenticatedRequest extends Request {
  userId: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@Req() request: AuthenticatedRequest) {
    console.log({ userId: request?.userId });
    return this.usersService.getUserById('user-id');
  }
}
