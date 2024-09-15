/**
 * @name contentSecurityPolicy
 * @description Custom content security security policy for use with 'helmet'
 * @constant
 */
const contentSecurityPolicy = {
  directives: {
    /* eslint-disable quotes */
    'style-src-elem': ["'self'", 'https://fonts.googleapis.com'],
  },
};

// Exporting content security policy to be used with 'helmet'
module.exports = contentSecurityPolicy;
