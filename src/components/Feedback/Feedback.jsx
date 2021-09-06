import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from './Statistic';
import Notification from './Message';
import TitleSection from './TitleName';

class Feedback extends Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalValue: 0,
    positivePercentageValue: '',
    visibleValue: false,
  };

  static propTypes = {};

  state = {
    good: this.props.goodValue,
    neutral: this.props.neutralValue,
    bad: this.props.badValue,
    title: 'Please leave feedback',
    titleStat: 'Statistics',
    total: this.props.totalValue,
    positivePercentage: this.props.positivePercentageValue,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
  };

  handleClickNeutr = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
    }));
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <TitleSection title={this.state.title}>
          <FeedbackOptions
            onGood={this.handleClickGood}
            onNeutr={this.handleClickNeutr}
            onBad={this.handleClickBad}
          />
        </TitleSection>

        {this.state.total ? (
          <Statistics
            title={this.state.titleStat}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
