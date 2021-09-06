import React, { Component } from 'react';
import Feedbackbtn from 'components/BtnFeedback/BtnFeedback';

class Feedback extends Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.goodValue,
    neutral: this.props.neutralValue,
    bad: this.props.badValue,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutr = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleClickBad = () => {
    this.setState(currentValue => ({
      bad: currentValue.bad + 1,
    }));
  };

  render() {
    return (
      <>
        <h1> Please leave feedback </h1>
        <Feedbackbtn
          onGood={this.handleClickGood}
          onNeutr={this.handleClickNeutr}
          onBad={this.handleClickBad}
        />
        <h2> Statistics </h2>
        <div className="statist">
          <span> Good: {this.state.good} </span> 
          <span> Neutral: {this.state.neutral} </span>
          <span> Bad: {this.state.bad} </span>
        </div>
      </>
    );
  }
}

export default Feedback;
