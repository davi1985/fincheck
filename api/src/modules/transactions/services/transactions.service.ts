import { TransactionsRepository } from 'src/shared/database/repositories/transactions/transactions.repositories';
import { Injectable } from '@nestjs/common';

import { ValidateBankAccountOwnershipService } from '../../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from '../../categories/services/validate-category-ownership.service';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';

type CreateParams = {
  userId: string;
  createTransactionDto: CreateTransactionDto;
};

type UpdateParams = {
  userId: string;
  transactionId: string;
  updateTransactionDto: UpdateTransactionDto;
};

type RemoveParams = {
  userId: string;
  transactionId: string;
};

type ValidateParams = {
  userId: string;
  bankAccountId?: string;
  categoryId?: string;
  transactionId?: string;
};

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

  findAllByUserId(userId: string) {
    return this.transactionsRepository.findAll({ where: { userId } });
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
  }: ValidateParams) {
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
