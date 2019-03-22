import React, {Component} from 'react';
import './App.css';
import Address from './Address'
import FirstLast from './FirstLast'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        street: "",
        city: "",
        state: "",
      },
      client: {
        firstName: "",
        lastName: ""
      },
      currentStepIdx: 0
    };
    this.changeStep = this.changeStep.bind(this);
    this.steps = this.steps.bind(this);
    this.initializeStep = this.initializeStep.bind(this);
  }

  steps() {
    return [{
      component: Address,
      props: this.state.address,
      events: {
        onChange: ({target: {name, value}}) => {
          const address = {...this.state.address};
          address[name] = value;
          this.setState({address})
        }
      },
    }, {
      component: FirstLast,
      props: this.state.client,
      events: {
        onChange: ({target: {name, value}}) => {
          const client = {...this.state.client};
          client[name] = value;
          this.setState({client})
        }
      }
    }];
  }

  initializeStep({component, props, events}) {
    return component({...props, ...events})
  }

  changeStep() {
    const lastStep = this.steps().length - 1;
    const nextStep = this.state.currentStepIdx + 1;
    return nextStep <= lastStep ?
        this.setState({currentStepIdx: nextStep}) :
        this.setState({currentStepIdx: 0})
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.changeStep}>Next Step</button>
          {this.initializeStep(this.steps()[this.state.currentStepIdx])}
        </div>
    );
  }
}

export default App;
