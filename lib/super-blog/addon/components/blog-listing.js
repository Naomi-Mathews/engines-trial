import Component from '@ember/component';
import layout from '../templates/components/blog-listing';
import { inject as service} from '@ember/service';
import {computed} from '@ember/object'

export default Component.extend({
  layout,
  parentRouter: service(),
  store: service(),
  product: computed(function() {
    return this.store.findAll('product').firstObject
  }),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  author: 'Pluto',
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  options: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
  actions: {
    async bestsellingProduct() {
      let products = await this.store.findRecord('product', 1)
      this.parentRouter.transitionTo('super-store.products.show', products.firstObject)
    },
    async latestBlog() {
      let blogs = await this.store.findAll('blog')
      this.transitionTo('blog.show', blogs.firstObject)
    },
    authorChanged(value) {
      this.set('author', value);
    }
  }
});
