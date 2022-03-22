/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  dependencies: {
    services: [
     'store',
     'parentRouter',
    ],
    externalRoutes: [
      'super-store',
    ]
  },
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
