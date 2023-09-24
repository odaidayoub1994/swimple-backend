import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './appConfig';
import { AppConfigService } from './appConfig.service';
import * as Joi from 'joi';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: Joi.object({
        ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number(),
        APPLICATION_NAME: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
