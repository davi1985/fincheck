import { CategoriesRepository } from 'src/shared/database/repositories/categories/categories.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

type ValidateParams = {
  userId: string;
  categoryId: string;
};

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async validate({ userId, categoryId }: ValidateParams) {
    const isOwner = await this.categoriesRepository.findFirst({
      where: { id: categoryId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Category account not found.');
    }
  }
}
