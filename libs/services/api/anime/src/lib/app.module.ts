import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimeEntity } from '@Bunnoon/shared-entities';

import { AnimeController } from './app.controller';
import { AnimeService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnimeEntity])],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class ServiceApiAnimeModule {}
