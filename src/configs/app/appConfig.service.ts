import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import CONSTANTS from 'src/common/constants';
@Injectable()
export class AppConfigService {
  /**
   * We should inject the Service within the constructor.
   */
  constructor(private configService: ConfigService) {}

  /**
   * Getter for the current env.
   * @returns {string}
   */
  get currentEnv(): string {
    const env = this.configService.get<string>(CONSTANTS.APP_CONFIG_ENV);
    if (env === CONSTANTS.DEVELOPMENT) {
      return CONSTANTS.DEVELOPMENT_ENV;
    } else {
      return CONSTANTS.PRODUCTION_ENV;
    }
  }

  /**
   * Getter for the port.
   * @returns {number}
   */
  get port(): number {
    const port = this.configService.get<number>(CONSTANTS.APP_CONFIG_PORT);
    if (!port) {
      return CONSTANTS.PORT;
    } else {
      return port;
    }
  }

  /**
   * Getter for the app name.
   * @returns {string}
   */
  get appName(): string {
    const appName = this.configService.get<string>(CONSTANTS.APP_CONFIG_NAME);
    if (appName === undefined) {
      return CONSTANTS.APPLICATION_NAME;
    } else {
      return appName;
    }
  }
}
