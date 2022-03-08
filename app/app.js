/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  engines: {
    'super-blog': {
      dependencies: {
        services: [
          'store',
          { parentRouter: 'router'}
        ]
      }
    },
    'super-store': {
      dependencies: {
        services: [
          'store',
          { parentRouter: 'router'}
        ]
      }
    }
  },
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
