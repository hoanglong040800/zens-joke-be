import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JokeEntity } from 'src/_core/entities';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class JokesRepository {
  constructor(
    @InjectRepository(JokeEntity)
    private readonly repo: Repository<JokeEntity>
  ) {}

  async findAll(options?: FindManyOptions<JokeEntity>): Promise<JokeEntity[]> {
    return await this.repo.find(options);
  }

  async findOne(options?: FindOneOptions<JokeEntity>): Promise<JokeEntity> {
    return await this.repo.findOne(options);
  }

  async updateVote(
    id: string,
    key: keyof Pick<JokeEntity, 'upvote' | 'downvote'>
  ) {
    const result = await this.repo.update(id, {
      [key]: () => `${key} + 1`
    });

    if (result.affected === 0) {
      return false;
    }

    return true;
  }

  createQueryBuilder(alias?: string) {
    return this.repo.createQueryBuilder(alias);
  }
}
