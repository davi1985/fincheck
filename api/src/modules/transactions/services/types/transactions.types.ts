import { CreateTransactionDto } from '../../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../../dto/update-transaction.dto';

export type CreateParams = {
  userId: string;
  createTransactionDto: CreateTransactionDto;
};

export type FindAllParams = {
  userId: string;
  filters: { month: number; year: number };
};

export type UpdateParams = {
  userId: string;
  transactionId: string;
  updateTransactionDto: UpdateTransactionDto;
};

export type RemoveParams = {
  userId: string;
  transactionId: string;
};

export type ValidateEntitiesParams = {
  userId: string;
  bankAccountId?: string;
  categoryId?: string;
  transactionId?: string;
};

export type ValidateTransactionParams = {
  userId: string;
  transactionId: string;
};
