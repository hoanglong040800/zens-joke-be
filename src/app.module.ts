import { Module } from '@nestjs/common';
import { JokesModule } from './jokes/jokes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IPostgresEnv } from './_core';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<IPostgresEnv>) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/_core/entities/*.js'],

        // create schema auto
        synchronize: true
      })
    }),

    JokesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
