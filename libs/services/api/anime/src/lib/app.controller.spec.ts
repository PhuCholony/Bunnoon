import { Test } from '@nestjs/testing';
import { AnimeController } from './app.controller';
import { AnimeService } from './app.service';

describe('Anime Controller', () => {
  let controller: AnimeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AnimeService],
      controllers: [AnimeController],
    }).compile();

    controller = module.get(AnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
