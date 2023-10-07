import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS_WHITE_LIST } from './_core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: 'content-type',
    origin: CORS_WHITE_LIST,
  });

  await app.listen(5000);
}
bootstrap();
