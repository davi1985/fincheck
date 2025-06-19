/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ValidationError } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  databaseUrl: string;
}

export const env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL,
}) as Env;

const errors = validateSync(env) as ValidationError[];

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
