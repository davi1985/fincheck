/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class AuthenticateDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
