import { BankAccount, Prisma } from '@prisma/client';

export abstract class IBankAccountsRepository {
  abstract create(data: Prisma.BankAccountCreateArgs): Promise<BankAccount>;

  abstract findAll(
    data: Prisma.BankAccountFindManyArgs,
  ): Promise<BankAccount[]>;

  abstract findFist(
    data: Prisma.BankAccountFindFirstArgs,
  ): Promise<BankAccount | null>;

  abstract update(data: Prisma.BankAccountUpdateArgs): Promise<BankAccount>;

  abstract delete(
    data: Prisma.BankAccountDeleteArgs,
  ): Promise<BankAccount | null>;
}
