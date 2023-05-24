import PropTypes from 'prop-types';

import React from 'react';



import { useState } from 'react';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';


// const MyContext = createContext()

export const App = () => {
  
const[good,setGood] = useState(0);
const[neutral,setNeutral] = useState(0);
const[bad,setBad] = useState(0);

 const  handleCounter = ({ target: { name } }) => {
    switch (name)  {    
     case 'good':setGood(prev => prev + 1);
        break;

      case 'neutral' : setNeutral(prev => prev = 1);
    
        break;
         case 'bad':setBad(prev => prev + 1);
        break;

    
      default:
        break;
 }
  };
   
  const countTotalFeedback = () => {
     return good + neutral + bad;
   };

   const countPositiveFeedbackPercentage = () => {
     if (countTotalFeedback === 0) {
       return 0;
     }
     return Math.floor(
       (good / (good + neutral + bad)) * 100
     );
   };



  return (
  
 <> 

        <div
          style={{
            // height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // fontSize: 40,
            color: '#010101',
          }}
        >
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={[good, neutral, bad]}
              onLeaveFeedback={handleCounter}
            ></FeedbackOptions>
          </Section>
          <Section title={'Statistics'}>
            {countTotalFeedback () > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()
                }
              ></Statistics>
            ) : (
              <Notification message={'There is feedback'} />
            )}
          </Section>
        </div>
       
      </>

  )
}



export default App;


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
