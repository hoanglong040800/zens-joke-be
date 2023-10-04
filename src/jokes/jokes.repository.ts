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

  async update(id: string, body: Partial<JokeEntity>): Promise<JokeEntity> {
    return await this.repo.save({ ...body, id });
  }

  createQueryBuilder() {
    return this.repo.createQueryBuilder('jokes');
  }
}
