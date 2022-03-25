import Abstractroute from './abstractroute';

export default class EmployeesRoute extends Abstractroute {
  model() {
    return this.store.findAll('employee');
  }
}
