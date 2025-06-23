import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma.service';
import { ITransactionsRepository } from './transactions.interface';

@Injectable()
export class TransactionsRepository implements ITransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTransactionDto: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createTransactionDto);
  }

  findAll(findAllDto: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findAllDto);
  }

  findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDto);
  }

  update(updateTransactionDto: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateTransactionDto);
  }

  delete(data: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(data);
  }
}
