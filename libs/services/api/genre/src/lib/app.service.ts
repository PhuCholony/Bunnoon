import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GenreEntity } from '@Bunnoon/shared-entities';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>
  ) {}

  async findAll() {
    return this.genreRepository.find();
  }

  async findOneByPK(pk: string) {
    return this.genreRepository.findOne({ where: { pk } });
  }
}
