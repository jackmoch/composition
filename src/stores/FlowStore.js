import Reflux from 'reflux';

export const flowActions = Reflux.createActions([
    'setAddress'
]);

class FlowStore extends Reflux.Store {

  constructor() {
    super();
    this.state = this.initializeState();
    this.listenables = flowActions;
  }

  initializeState() {
    return {
      address: {
        street: '',
        city: '',
        state: '',
      }
    }
  }

  onSetAddress (key, value) {
    const address = {...this.state.address};
    address[key] = value;
    this.setState({address})
  }
}

const flowStore = new FlowStore();

export default flowStore