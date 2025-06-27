import { ActiveUserId } from 'src/shared/decorators/active-user-id';
import { Controller, Get } from '@nestjs/common';

import { CategoriesService } from './services/categories.service';
import { UserId } from './services/types/categories-types';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@ActiveUserId() userId: UserId) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
