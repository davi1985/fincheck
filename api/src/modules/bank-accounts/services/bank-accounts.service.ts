import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts/bank-accounts.repositories';
import { Injectable } from '@nestjs/common';

import {
  CreateParams,
  FindAllByUserIdParams,
  RemoveParams,
  UpdateParams,
} from './types/bank-account.types';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}

  create({ userId, createBankAccountDto }: CreateParams) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.bankAccountsRepository.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  async findAllByUserId({ userId }: FindAllByUserIdParams) {
    const bankAccounts = await this.bankAccountsRepository.findAll({
      where: {
        userId,
      },
      include: {
        transactions: {
          select: {
            value: true,
            type: true,
          },
        },
      },
    });

    return bankAccounts.map(({ transactions, ...bankAccount }) => {
      const totalTransactions = transactions.reduce(
        (acc, transaction) =>
          acc +
          (transaction.type === 'INCOME'
            ? transaction.value
            : -transaction.value),
        0,
      );

      const currentBalance = bankAccount.initialBalance + totalTransactions;

      return {
        ...bankAccount,
        currentBalance,
        transactions,
      };
    });
  }

  async update({ userId, bankAccountId, updateBankAccountDto }: UpdateParams) {
    await this.validateBankAccountOwnershipService.validate({
      userId,
      bankAccountId,
    });

    const { color, initialBalance, name, type } = updateBankAccountDto;

    return this.bankAccountsRepository.update({
      where: { id: bankAccountId },
      data: {
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  async remove({ userId, bankAccountId }: RemoveParams) {
    await this.validateBankAccountOwnershipService.validate({
      userId,
      bankAccountId,
    });

    await this.bankAccountsRepository.delete({
      where: { id: bankAccountId },
    });
  }
}
