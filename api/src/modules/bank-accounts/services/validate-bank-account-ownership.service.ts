import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts/bank-accounts.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ValidateBankAccountParams } from './types/bank-account.types';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
  ) {}

  async validate({ userId, bankAccountId }: ValidateBankAccountParams) {
    const isOwner = await this.bankAccountsRepository.findFist({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found.');
    }
  }
}
