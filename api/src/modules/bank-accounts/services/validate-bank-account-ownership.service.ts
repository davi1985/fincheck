import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts/bank-accounts.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

type ValidateParams = {
  userId: string;
  bankAccountId: string;
};

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
  ) {}

  async validate({ userId, bankAccountId }: ValidateParams) {
    const isOwner = await this.bankAccountsRepository.findFist({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found.');
    }
  }
}
