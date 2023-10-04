import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JokeEntity } from 'src/_core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class JokesRepository {
  constructor(
    @InjectRepository(JokeEntity)
    private readonly repo: Repository<JokeEntity>
  ) {}

  async findAll(): Promise<JokeEntity[]> {
    const result =  await this.repo.find();
    return result
  }
}
