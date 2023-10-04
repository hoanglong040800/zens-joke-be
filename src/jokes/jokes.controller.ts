import { Controller, Get } from '@nestjs/common';
import { JokeDto } from 'src/database';
import { JokesService } from './jokes.service';
import { JokesRepository } from './jokes.repository';

@Controller('jokes')
export class JokesController {
  constructor(
    private readonly jokeService: JokesService,
    private readonly jokesRepo: JokesRepository
  ) {}

  @Get()
  findAll(): JokeDto {
    return null;
  }
}
