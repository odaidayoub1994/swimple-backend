import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './common/utils/utils.module';
import { AppConfigModule } from './configs/app/appConfig.module';
import { PostgresModule } from './configs/database/postgreSQL/postgreSQLConfig.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

/**
 * The root module of application.
 */
@Module({
  imports: [
    AppConfigModule,
    PostgresModule,
    UtilsModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
