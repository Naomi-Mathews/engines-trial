import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { inject as service} from '@ember/service';

export default Route.extend({
  store: service(),
  parentRouter: service(),
  beforeModel() {
    set(this, 'product', this.store.findAll('product').firstObject);
  },
  actions : {
    async bestsellingProduct() {
      let products = await this.store.findAll('product')
      this.parentRouter.transitionTo('super-store.products.show', products.firstObject)
    }
  }
});
