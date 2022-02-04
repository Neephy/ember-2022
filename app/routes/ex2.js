import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import { service } from '@ember/service';

export default class Ex2Route extends Route {
  @service productServices; //même nom que le service déclaré pour sur emberJS sache lequel utiliser

  model() {
    return this.productServices;
  }

  @action toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
