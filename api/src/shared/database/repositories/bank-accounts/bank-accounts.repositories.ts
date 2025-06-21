import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma.service';
import { IBankAccountsRepository } from './bank-accounts.repository.interface';

@Injectable()
export class BankAccountsRepository implements IBankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBankAccountDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createBankAccountDto);
  }

  findAll(findAllDto: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findAllDto);
  }

  findFist(findFirstDto: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDto);
  }

  update(updateBankAccountDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateBankAccountDto);
  }

  delete(data: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(data);
  }
}
