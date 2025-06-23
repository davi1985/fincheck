import { Category, Prisma } from '@prisma/client';

export abstract class ICategoriesRepository {
  abstract findMany(
    findManyDto: Prisma.CategoryFindManyArgs,
  ): Promise<Category[]>;

  abstract findFirst(
    findFirstDto: Prisma.CategoryFindFirstArgs,
  ): Promise<Category | null>;
}
