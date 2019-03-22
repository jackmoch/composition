import React, {Component} from 'react';
import './App.css';
import Address from './Address'
import FirstLast from './FirstLast'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        street: undefined,
        city: undefined,
        state: undefined,
        basicZip: undefined,
        plusFourZip: undefined
      },
      client: {
        firstName: undefined,
        lastName: undefined
      },
      currentStepIdx: 0
    };
    this.steps = [{
      component: Address,
      props: {...this.state.address},
      events: {
        onChange: ({target: {key, value}}) => {
          const address = {...this.state.address};
          address[key] = value;
          this.setState({address})
        }
      },
    }, {
      component: FirstLast,
      props: {...this.state.client},
      events: {
        onChange: ({target: {key, value}}) => {
          const client = {...this.state.client};
          client[key] = value;
          this.setState({client})
        }
      }
    }];
    this.changeStep = this.changeStep.bind(this);
  }

  initializeStep({component, props, events}) {
    return component({...props, ...events})
  }

  changeStep() {
    const lastStep = this.steps.length - 1;
    const nextStep = this.state.currentStepIdx + 1;
    return nextStep <= lastStep ?
        this.setState({currentStepIdx: nextStep}) :
        this.setState({currentStepIdx: 0})
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.changeStep}>Next Step</button>
          {this.initializeStep(this.steps[this.state.currentStepIdx])}
        </div>
    );
  }
}

export default App;
