/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    contentSecurityPolicy: {
      'connect-src': "*",
      'font-src':'*',//googlefonts
      'style-src':'*'
    },

    api: {
      host: 'http://localhost:3000',
      // host: 'http://52.27.7.190:3000'
    }
  };

  ENV['ember-simple-auth'] = {
    store: 'session-store:local-storage',
    // routeAfterAuthentication: 'dashboard',
    // routeIfAlreadyAuthenticated: 'dashboard'
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // api.host:'http://52.27.7.190:3000'
    api: {
      host: 'http://localhost:3000'
    }

  }

  return ENV;
};
