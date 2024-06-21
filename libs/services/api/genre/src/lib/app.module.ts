import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimeEntity, GenreEntity } from '@Bunnoon/shared-entities';

import { GenreController } from './app.controller';
import { GenreService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnimeEntity, GenreEntity])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
