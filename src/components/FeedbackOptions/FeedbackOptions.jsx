import React from 'react';




 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
           <li style={{listStyle: 'none' }} key={option}>
            <button type="button" onClick={onLeaveFeedback}
             name={option}>
             
              {option}
            </button>
           </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;