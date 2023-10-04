import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesRepository } from './jokes.repository';
import { JokeEntity } from 'src/_core/entities';

@Controller('jokes')
export class JokesController {
  constructor(
    private readonly service: JokesService,
    private readonly repo: JokesRepository
  ) {}

  @Get()
  async findAll(): Promise<JokeEntity[]> {
    return await this.repo.findAll();
  }
}
