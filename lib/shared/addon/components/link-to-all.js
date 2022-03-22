import Component from '@ember/component';
import layout from '../templates/components/link-to-all';
import { inject as service} from '@ember/service';

export default Component.extend({
  layout,
  parentRouter: service(),
  actions: {
    redirect() {
      this.parentRouter.transitionTo(this.path)
    }
  }
});

