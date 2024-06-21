import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { GenreService } from './app.service';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  async list() {
    return await this.genreService.findAll();
  }

  @Get(':pk')
  async retrieve(@Param('pk') pk: string) {
    const genre = await this.genreService.findOneByPK(pk);
    if (!genre) {
      throw new NotFoundException('Genre does not exist.');
    }
    return genre;
  }
}
