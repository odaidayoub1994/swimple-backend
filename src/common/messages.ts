import CONSTANTS from './constants';

/**
 * Success messages
 */
const SUCCESS = {
  CONNECT_SUCCESS: 'Successfully connected to the database',
  CREATED: 'This id has been created successfully',
  USER_CREATED: 'User has been created successfully',
  DELETED: 'This id has been deleted successfully',
  UPDATE: 'This id has been updated successfully',
  SUCCESS: 'Success',
};

/**
 * Information messages
 */
const INFO = {
  HELLO_WORLD: 'Hello World!',
  HOME: 'Whitelist API',
  PENDING: 'Connecting...',
  LISTENING: `App listening on port ${CONSTANTS.PORT}`,
  EMPTY: '',
};

/**
 * Error messages
 */
const ERROR = {
  SERVER: 'Internal serve error',
  CREATE: 'Some error occurred while creating',
  ALREADY_EXIST: 'This entity is already exist',
  CONNECT_ERROR: 'Error! Could not connect to the database',
  UPDATE: 'Some error occurred while updating',
  READ: 'Some error occurred while fetching data',
  INVALID: 'Invalid request',
  REMOVE: 'Some error occurred while removing data',
  NOT_EXISTS: "This id doesn't exists",
  LOGIN: 'Failed to login',
  INVALID_CREDENTIALS: 'Invalid credentials',
  UNAUTHORIZED: 'Unauthorized request',
  UNEXPECTED_ERROR: 'Unexpected error',
  THERE_ARE_NO_USERS: 'There are no Users',
  EMAIL: 'Email already exists',
};

const MESSAGES = {
  SUCCESS,
  INFO,
  ERROR,
};

export default MESSAGES;
