import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req
} from '@nestjs/common';
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

  @Patch('/:id/upvote')
  async increaseUpvote(@Param() param): Promise<boolean> {
    const result = await this.repo.updateVote(param.id, 'upvote');

    if (!result) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  @Patch('/:id/downvote')
  async increaseDownvote(@Param() param): Promise<boolean> {
    const result = await this.repo.updateVote(param.id, 'downvote');

    if (!result) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
