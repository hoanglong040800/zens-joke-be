import { Controller, Get, Patch, Post, Query, Req } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesRepository } from './jokes.repository';
import { JokeEntity } from 'src/_core/entities';

@Controller('jokes')
export class JokesController {
  constructor(
    private readonly repo: JokesRepository,
    private readonly service: JokesService
  ) {}

  @Get()
  async findAll(): Promise<JokeEntity[]> {
    return await this.repo.findAll();
  }

  @Post('/random')
  async findNextRandomJoke(@Req() req): Promise<JokeEntity> {
    return await this.service.getOneRandomJoke(req.body.readJokeIds);
  }
}
