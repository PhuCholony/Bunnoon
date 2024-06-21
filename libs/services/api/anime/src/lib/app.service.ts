import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AnimeEntity } from '@Bunnoon/shared-entities';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(AnimeEntity)
    private readonly animeRepository: Repository<AnimeEntity>
  ) {}
}
