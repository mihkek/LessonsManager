import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app =  await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.setViewEngine('pug');
  await app.listen(3000);
}
bootstrap();
