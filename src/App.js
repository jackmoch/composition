import React, { Component } from "react";
import "./App.css";
import ClientDetails from "./components/addNewBusinessFlow/ClientDetails";
import Products from "./components/addNewBusinessFlow/Products";
import { connect } from "react-redux";
import { actions } from "./redux/modules/addNewBusinessFlow/clientDetailsStep/clientDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepIdx: 0
    };
    this.changeStep = this.changeStep.bind(this);
    this.steps = this.steps.bind(this);
    this.initializeStep = this.initializeStep.bind(this);
  }

  steps() {
    return [
      {
        component: ClientDetails,
        props: this.props.clientDetails,
        events: {
          onChange: ({ target: { name, value } }) => {
            this.props.changeClientDetails(name, value);
          }
        }
      },
      {
        component: Products,
        props: {},
        events: {
          onChange: ({ target: { name, value } }) => {
            // this.props.changeClientDetails(name, value)
          }
        }
      }
    ];
  }

  initializeStep = ({ component, props, events }) => {
    return component({ ...props, ...events });
  };

  changeStep() {
    const lastStep = this.steps().length - 1;
    const nextStep = this.state.currentStepIdx + 1;
    return nextStep <= lastStep
      ? this.setState({ currentStepIdx: nextStep })
      : this.setState({ currentStepIdx: 0 });
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

const mapStateToProps = state => {
  return {
    clientDetails: state.clientDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeClientDetails: (name, val) => {
      const payload = {
        [name]: val
      };
      dispatch({ type: actions.updateClientDetails, payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
