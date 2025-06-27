import { CategoriesRepository } from 'src/shared/database/repositories/categories/categories.repositories';
import { Injectable } from '@nestjs/common';

import { UserId } from './types/categories-types';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  findAllByUserId(userId: UserId) {
    return this.categoriesRepository.findMany({
      where: {
        userId,
      },
    });
  }
}
