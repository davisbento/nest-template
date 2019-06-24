import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
