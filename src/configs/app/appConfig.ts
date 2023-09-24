import { registerAs } from '@nestjs/config';
import CONSTANTS from 'src/common/constants';

/**
 * Use the registerAs function to return a namespaced configuration object.
 */
export default registerAs(CONSTANTS.APP_CONFIG, () => ({
  env: process.env.ENV,
  port: process.env.PORT,
  appName: process.env.APPLICATION_NAME,
}));
