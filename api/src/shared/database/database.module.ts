import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts/bank-accounts.repositories';
import { CategoriesRepository } from './repositories/categories/categories.repositories';
import { UsersRepository } from './repositories/users/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
