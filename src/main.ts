import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:{
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST',
      credentials:true,
    }
  });
  app.useGlobalPipes(new ValidationPipe());  
  app.setGlobalPrefix('api/v1');
  await app.listen(3480);
}
bootstrap();
