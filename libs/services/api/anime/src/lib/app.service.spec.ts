import { Test } from '@nestjs/testing';
import { AnimeService } from './app.service';

describe('Anime Service', () => {
  let service: AnimeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AnimeService],
    }).compile();

    service = module.get(AnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
