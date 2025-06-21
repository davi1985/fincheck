import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma.service';
import { ICategoriesRepository } from './categories.repository.interface';

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDto);
  }
}
