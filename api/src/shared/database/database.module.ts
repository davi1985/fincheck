import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts/bank-accounts.repositories';
import { CategoriesRepository } from './repositories/categories/categories.repositories';
import { TransactionsRepository } from './repositories/transactions/transactions.repositories';
import { UsersRepository } from './repositories/users/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
