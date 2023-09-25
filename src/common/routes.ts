/**
 * Home routes
 */
const HOME = {
  ROOT: '/',
};

/**
 * User routes
 */
const USER = {
  ROOT: 'user',
  SIGNUP: 'signup',
  UPDATE: 'update/:id',
  READ: 'read/:id',
  EMAIL: 'read/email/:email',
  LIST: 'list',
  REMOVE: 'remove/:id',
  LOGIN: 'login',
};

/**
 * ROUTES contains all the routes in the application
 */
const ROUTES = {
  HOME,
  USER,
};

export default ROUTES;
