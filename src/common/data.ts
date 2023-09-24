/**
 * Database Tables
 */
const ENTITIES = {
  USERS: 'users',
};

const PASSWORD_CHARSET =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_)(+=-%$#@!^&*';

const SALT_OR_ROUNDS = 12;

const COMMON = {
  ENTITIES,
  PASSWORD_CHARSET,
  SALT_OR_ROUNDS,
};

export default COMMON;
