import { TransactionsRepository } from 'src/shared/database/repositories/transactions/transactions.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ValidateTransactionParams } from './types/transactions.types';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async validate({ userId, transactionId }: ValidateTransactionParams) {
    const isOwner = await this.transactionsRepository.findFirst({
      where: { id: transactionId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction account not found.');
    }
  }
}
