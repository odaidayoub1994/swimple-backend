import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import CONSTANTS from './common/constants';
import { AppConfigService } from './configs/app/appConfig.service';

/**
 * The entry file of the application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Swimple')
    .setDescription('API description for Swimple v1')
    .setVersion('1.0')
    .addTag('swimple')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  /**
   * Middleware to read urlencoded payloads
   */
  app.use(urlencoded({ extended: false, limit: CONSTANTS.PAYLOADS_LIMIT }));

  /**
   * Middleware to read JSON payloads
   */
  app.use(json({ limit: CONSTANTS.PAYLOADS_LIMIT }));

  const appConfig: AppConfigService = app.get(AppConfigService);

  /**
   * enforce global validation rules for all incoming client payloads
   */
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(appConfig.port);
}
bootstrap();
