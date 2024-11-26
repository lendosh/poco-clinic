/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/booking',
    '/about',
    '/contact-us',
    '/auth/new-verification'
];

/**
 * An array of routes that are used to the authentication
 * These routes will redirect logged-in users to /backoffice
 * @type {string[]}
 */
export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset',
    '/auth/new-password',
]

/**
 * the prefix for API authentication routes
 * That start with this prefix are used for API auth purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logged-in
 */
export const DEFAULT_LOGIN_REDIRECT = '/';
