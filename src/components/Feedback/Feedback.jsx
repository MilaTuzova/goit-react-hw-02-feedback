import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Message';
import TitleSection from './SectionTitle';

import {Container} from 'components/Style.styled';

const option = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
};

class Feedback extends Component {
  static defaultProps = {
    goodStaticValue: 0,
    neutralStaticValue: 0,
    badStaticValue: 0,
    totalStaticValue: 0,
    positivePercentageStaticValue: '100%',
  };

  state = {
    good: this.props.goodStaticValue,
    neutral: this.props.neutralStaticValue,
    bad: this.props.badStaticValue,
    title: 'Please leave feedback',
    titleStat: 'Statistics',
    total: this.props.totalStaticValue,
    positivePercentage: this.props.positivePercentageStaticValue,
  };

  countTotalFeedback = evt => {
    console.log(evt);
    const name = evt.target.dataset.option;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round((this.state.good / this.state.total) * 100);
    return `${percent}%`;
  };

  render() {
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <TitleSection title={this.state.title}>
          <FeedbackOptions options={option} onLeaveFeedback={this.countTotalFeedback} />
        </TitleSection>

        {this.state.total ? (
          <Statistics
            title={this.state.titleStat}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={positivePercent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default Feedback;
