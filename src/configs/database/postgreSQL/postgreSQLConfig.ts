import { registerAs } from '@nestjs/config';
import CONSTANTS from '../../../common/constants';

/**
 * Use the registerAs() function to name configuration object.
 */
export default registerAs(CONSTANTS.DB_CONFIG, () => ({
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  username: process.env.POSTGRESQL_USER_NAME,
  password: process.env.POSTGRESQL_USER_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE_NAME,
}));
