import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { JokesRepository } from './jokes.repository';

@Module({
  providers: [JokesService, JokesRepository],
  controllers: [JokesController],
  exports: [JokesService, JokesRepository]
})
export class JokesModule {}
