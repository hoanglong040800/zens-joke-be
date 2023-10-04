import { Injectable } from '@nestjs/common';
import { JokeEntity } from 'src/_core/entities';
import { JokesRepository } from './jokes.repository';
import { In, Not } from 'typeorm';

@Injectable()
export class JokesService {
  constructor(private readonly repo: JokesRepository) {}

  async getOneRandomJoke(readJokeIds?: string[]): Promise<JokeEntity> {
    const queryBuilder = this.repo.createQueryBuilder().orderBy('RANDOM()');

    if (readJokeIds) {
      queryBuilder.where({
        id: Not(In(readJokeIds))
      });
    }

    return await queryBuilder.getOne();
  }
}
