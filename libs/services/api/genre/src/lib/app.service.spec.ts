import { Test } from '@nestjs/testing';
import { GenreService } from './app.service';

describe('Genre Service', () => {
  let service: GenreService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [GenreService],
    }).compile();

    service = module.get(GenreService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
