import { TransactionsRepository } from 'src/shared/database/repositories/transactions/transactions.repositories';
import { Injectable } from '@nestjs/common';

import { ValidateBankAccountOwnershipService } from '../../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from '../../categories/services/validate-category-ownership.service';
import {
  CreateParams,
  FindAllParams,
  RemoveParams,
  UpdateParams,
  ValidateEntitiesParams,
} from './types/transactions.types';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: ValidateTransactionOwnershipService,
  ) {}

  async create({ userId, createTransactionDto }: CreateParams) {
    const { bankAccountId, categoryId, date, name, type, value } =
      createTransactionDto;

    await this.validateEntitiesOwnership({
      userId,
      categoryId,
      bankAccountId,
    });

    return this.transactionsRepository.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        date,
        name,
        type,
        value,
      },
    });
  }

  findAllByUserId({ userId, filters }: FindAllParams) {
    return this.transactionsRepository.findAll({
      where: {
        userId,
        ...(filters.bankAccountId && {
          bankAccount: {
            id: filters.bankAccountId,
          },
          type: filters.type,
        }),
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month)),
          lt: new Date(Date.UTC(filters.year, filters.month + 1)),
        },
      },
    });
  }

  async update({ userId, transactionId, updateTransactionDto }: UpdateParams) {
    const { bankAccountId, categoryId, date, name, type, value } =
      updateTransactionDto;

    await this.validateEntitiesOwnership({
      userId,
      bankAccountId,
      categoryId,
      transactionId,
    });

    return this.transactionsRepository.update({
      where: { id: transactionId },
      data: { bankAccountId, categoryId, date, name, type, value },
    });
  }

  async remove({ userId, transactionId }: RemoveParams) {
    await this.validateEntitiesOwnership({ userId, transactionId });

    await this.transactionsRepository.delete({ where: { id: transactionId } });

    return null;
  }

  private async validateEntitiesOwnership({
    userId,
    bankAccountId,
    categoryId,
    transactionId,
  }: ValidateEntitiesParams) {
    await Promise.all([
      transactionId &&
        this.validateTransactionOwnershipService.validate({
          userId,
          transactionId,
        }),

      bankAccountId &&
        this.validateBankAccountOwnershipService.validate({
          userId,
          bankAccountId,
        }),

      categoryId &&
        this.validateCategoryOwnershipService.validate({
          userId,
          categoryId,
        }),
    ]);
  }
}
