import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('blogs', function() {
    this.route('show', { path: '/:blog_id' });
  })
});
