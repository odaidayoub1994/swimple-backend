import { Global, Module } from '@nestjs/common';
import { AppConfigModule } from 'src/configs/app/appConfig.module';
import { HelpersService } from './helpers.service';

@Global()
@Module({
  imports: [AppConfigModule],
  providers: [HelpersService],
  exports: [HelpersService],
})
export class UtilsModule {}
