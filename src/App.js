import React, {Component} from 'react';
import './App.css';
import Address from './Address'
import FirstLast from './FirstLast'

class App extends Component {
  constructor(props){
    super(props);
    this.comps = [Address, FirstLast];
    this.state = {
      address: {
        street: undefined,
        city: undefined,
        state: undefined
      },
      client: {
        firstName: undefined,
        lastName: undefined
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({target: {name, value}}) {
    const access = name.split('.');
    const ob = {...this.state[access[0]]};
    ob[access[1]] = value;
    this.setState({[access[0]]: ob})
  }

  render() {
    return (
        <div className="App">
          {this.comps[1]({onChange: this.onChange, ...this.state})}
        </div>
    );
  }
}

export default App;
