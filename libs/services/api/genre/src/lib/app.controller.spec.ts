import { Test } from '@nestjs/testing';
import { GenreController } from './app.controller';
import { GenreService } from './app.service';

describe('Genre Controller', () => {
  let controller: GenreController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [GenreService],
      controllers: [GenreController],
    }).compile();

    controller = module.get(GenreController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
