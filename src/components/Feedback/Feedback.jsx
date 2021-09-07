import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from './Statistic';
import Notification from './Message';
import TitleSection from './TitleName';

const option = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
};

console.table(option.good.value);

class Feedback extends Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalValue: 0,
    positivePercentageValue: '',
  };

  state = {
    good: this.props.goodValue,
    neutral: this.props.neutralValue,
    bad: this.props.badValue,
    title: 'Please leave feedback',
    titleStat: 'Statistics',
    total: this.props.totalValue,
    positivePercentage: this.props.positivePercentageValue,
  };

  handleClickFeedback = evt => {
    // console.log(evt.target.dataset.options);
    const name = evt.target.dataset.options;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <TitleSection title={this.state.title}>
          <FeedbackOptions options={option} onLeaveFeedback={this.handleClickFeedback} />
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
