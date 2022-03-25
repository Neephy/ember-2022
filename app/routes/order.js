import abstractroute from './abstractroute';

export default class OrderRoute extends abstractroute {
  model(params) {
    return this.store.findRecord('order', params.order_id, {include:'orderdetails.product,user'});
  }
}

