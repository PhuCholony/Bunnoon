import { Controller } from '@nestjs/common';

import { GenreService } from './app.service';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}
}
