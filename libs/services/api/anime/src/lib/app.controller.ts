import { Controller } from '@nestjs/common';

import { AnimeService } from './app.service';

@Controller('animes')
export class AnimeController {
  constructor(private animeService: AnimeService) {}
}
