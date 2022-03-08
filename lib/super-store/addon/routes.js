import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('products', function() {
    this.route('show', { path: '/:product_id' });
  })
});

