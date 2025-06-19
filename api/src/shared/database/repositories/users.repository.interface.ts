import { Prisma, User } from '@prisma/client';

export abstract class IUsersRepository {
  abstract create(data: Prisma.UserCreateArgs): Promise<User>;
  abstract findUnique(data: Prisma.UserFindUniqueArgs): Promise<User | null>;
}
