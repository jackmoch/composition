import Reflux from 'reflux';

export const flowActions = Reflux.createActions([
    'setAddress',
    'setClientInfo'
]);

class FlowStore extends Reflux.Store {

  constructor() {
    super();
    this.state = this.initializeState();
  }

  initializeState() {
    return {
      address: {
        street: undefined,
        city: undefined,
        state: undefined,
      },
      client: {
        firstName: "",
        lastName: ""
      }
    }
  }

  onSetAddress (key, value) {
    console.log('hello')
    const address = {...this.state.address};
    address[key] = value;
    this.setState({address})
  }

}

const flowStore = new FlowStore();

export default flowStore