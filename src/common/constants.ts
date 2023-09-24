import { FindOptionsOrderValue } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ORDER_BY_DESC = 'DESC' as FindOptionsOrderValue | undefined;

const ORDER_BY_ASC = 'ASC' as FindOptionsOrderValue | undefined;

/**
 * Environment constants
 */
const PRODUCTION_ENV = 'PROD';
const DEVELOPMENT_ENV = 'DEV';
const DEVELOPMENT = 'development';

const APPLICATION_NAME = 'Swimple';
const PORT = 5000;

/**
 * App config constants
 */
const APP_CONFIG = 'app';
const APP_CONFIG_ENV = `${APP_CONFIG}.env`;
const APP_CONFIG_PORT = `${APP_CONFIG}.port`;
const APP_CONFIG_NAME = `${APP_CONFIG}.appName`;

/**
 * DB configurations
 * */
const DB_CONFIG = 'postgresql';
const DB_CONFIG_HOST = `${DB_CONFIG}.host`;
const DB_CONFIG_PORT = `${DB_CONFIG}.port`;
const DB_CONFIG_USERNAME = `${DB_CONFIG}.username`;
const DB_CONFIG_PASSWORD = `${DB_CONFIG}.password`;
const DB_CONFIG_DATABASE = `${DB_CONFIG}.database`;

const PAYLOADS_LIMIT = '1mb';

const MAX_FILES = 1;

const PASSWORD_LENGTH = 12;

const SECRET = 's038-pwpppwpeok-dffMjfjriru44030423-edmmfvnvdmjrp4l4k';

const EXPIRES_IN = '2h';

const CONSTANTS = {
  PRODUCTION_ENV,
  DEVELOPMENT_ENV,
  DEVELOPMENT,
  APPLICATION_NAME,
  PAYLOADS_LIMIT,
  PASSWORD_LENGTH,
  APP_CONFIG,
  APP_CONFIG_ENV,
  APP_CONFIG_PORT,
  APP_CONFIG_NAME,
  DB_CONFIG,
  DB_CONFIG_HOST,
  DB_CONFIG_PORT,
  DB_CONFIG_USERNAME,
  DB_CONFIG_PASSWORD,
  DB_CONFIG_DATABASE,
  MAX_FILES,
  EXPIRES_IN,
  PORT,
  SECRET,
  ORDER_BY_DESC,
  ORDER_BY_ASC,
};

export default CONSTANTS;
