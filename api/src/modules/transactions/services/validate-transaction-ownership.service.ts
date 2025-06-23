import { TransactionsRepository } from 'src/shared/database/repositories/transactions/transactions.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

type ValidateParams = {
  userId: string;
  transactionId: string;
};

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async validate({ userId, transactionId }: ValidateParams) {
    const isOwner = await this.transactionsRepository.findFirst({
      where: { id: transactionId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction account not found.');
    }
  }
}
