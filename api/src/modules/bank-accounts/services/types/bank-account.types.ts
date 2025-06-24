import { CreateBankAccountDto } from '../../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../../dto/update-bank-account.dto';

export type CreateParams = {
  userId: string;
  createBankAccountDto: CreateBankAccountDto;
};

export type FindAllByUserIdParams = { userId: string };

export type UpdateParams = {
  userId: string;
  bankAccountId: string;
  updateBankAccountDto: UpdateBankAccountDto;
};

export type RemoveParams = { userId: string; bankAccountId: string };

export type ValidateBankAccountParams = {
  userId: string;
  bankAccountId: string;
};
