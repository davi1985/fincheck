import { Request } from 'express';

import { Controller, Get, Req } from '@nestjs/common';

import { UsersService } from './users.service';

interface AuthenticatedRequest extends Request {
  userId: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@Req() request: AuthenticatedRequest) {
    return this.usersService.getUserById(request.userId);
  }
}
