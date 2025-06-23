import { Prisma, Transaction } from '@prisma/client';

export abstract class ITransactionsRepository {
  abstract create(data: Prisma.TransactionCreateArgs): Promise<Transaction>;

  abstract findAll(
    data: Prisma.TransactionFindManyArgs,
  ): Promise<Transaction[]>;

  abstract findFirst(
    data: Prisma.TransactionFindFirstArgs,
  ): Promise<Transaction | null>;

  abstract update(data: Prisma.TransactionUpdateArgs): Promise<Transaction>;

  abstract delete(
    data: Prisma.TransactionDeleteArgs,
  ): Promise<Transaction | null>;
}
