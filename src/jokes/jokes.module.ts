import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { JokesRepository } from './jokes.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeEntity } from 'src/_core/entities';

@Module({
  imports: [TypeOrmModule.forFeature([JokeEntity])],
  controllers: [JokesController],
  providers: [JokesService, JokesRepository],
  exports: [JokesService, JokesRepository]
})
export class JokesModule {}
