import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Section from 'components/SectionTitle/SectionTitle.jsx'; 
import Notification from 'components/Notification/Notification.jsx';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({ good, neutral, bad })

 const countTotalFeedback = () => {
     return good + neutral + bad
}

const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad
    return Math.round(good * 100 / total)
}

const onLeaveFeedback = event => {
  const currentButton = event.currentTarget.value;
  switch (currentButton) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;

    case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;

    case 'bad':
      setBad(prevBad => prevBad + 1);
      break;

    default:
      return;
  }
};
    return (
      <>
        <Section title="Please leave feedback">
           <FeedbackOptions
              onLeaveFeedback ={onLeaveFeedback}
              options={options}
           />
        </Section>
         {countTotalFeedback() !== 0 ?
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
        : <Notification message="There is no feedback" />
      }
      </>
    )
  
}


