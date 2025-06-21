import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts/bank-accounts.repositories';
import { Injectable } from '@nestjs/common';

import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

type CreateParams = {
  userId: string;
  createBankAccountDto: CreateBankAccountDto;
};

type FindAllByUserIdParams = { userId: string };

type UpdateParams = {
  userId: string;
  bankAccountId: string;
  updateBankAccountDto: UpdateBankAccountDto;
};

type RemoveParams = { userId: string; bankAccountId: string };

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

  findAllByUserId({ userId }: FindAllByUserIdParams) {
    return this.bankAccountsRepository.findAll({
      where: {
        userId,
      },
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
