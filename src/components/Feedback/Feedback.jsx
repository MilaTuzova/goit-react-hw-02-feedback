import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Message';
import TitleSection from './SectionTitle';

import { Container } from 'components/Style.styled';

const option = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
};

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  leaveFeedback = evt => {
    // console.log(evt);
    const name = evt.target.dataset.option;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
      total: this.countTotalFeedback,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return `${percent}%`;
  };

  render() {
    const positivePercent = this.countPositiveFeedbackPercentage();
const totalFeedbask = this.countTotalFeedback();
    return (
      <Container>
        <TitleSection title="Please leave feedback">
          <FeedbackOptions options={option} onLeaveFeedback={this.leaveFeedback} />
        </TitleSection>

        {totalFeedbask ? (
          <Statistics
            title="Statistics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbask}
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
