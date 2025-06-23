import { CategoriesRepository } from 'src/shared/database/repositories/categories/categories.repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    return this.categoriesRepository.findMany({
      where: {
        userId,
      },
    });
  }
}
