import { Controller, Get } from '@nestjs/common';

import { GenreService } from './app.service';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  async list() {
    return await this.genreService.findAll();
  }
}
