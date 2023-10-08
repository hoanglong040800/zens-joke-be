import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS_WHITE_LIST } from './_core';
import * as cookieParser from 'cookie-parser';
import { ResponseFormatInterceptor } from './_core/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: 'content-type',
    origin: CORS_WHITE_LIST,
    credentials: true
  });

  app.use(cookieParser());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());

  await app.listen(5000);
}
bootstrap();
