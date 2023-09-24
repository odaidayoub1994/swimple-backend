import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import CONSTANTS from 'src/common/constants';
import { AuthService } from './auth.service';

/**
 * The Auth module.
 */
@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: CONSTANTS.SECRET,
      signOptions: { expiresIn: CONSTANTS.EXPIRES_IN },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
