import Reflux from 'reflux';

export const flowActions = Reflux.createActions([
    'setAddress',
    'setClientInfo'
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
      },
      clientInfo: {
        firstName: '',
        lastName: ''
      }
    }
  }

  onSetAddress (key, value) {
    const address = {...this.state.address};
    address[key] = value;
    this.setState({address})
  }

  onSetClientInfo (key, value) {
    const clientInfo = {...this.state.clientInfo};
    clientInfo[key] = value;
    this.setState({clientInfo})
  }
}

const flowStore = new FlowStore();

export default flowStore