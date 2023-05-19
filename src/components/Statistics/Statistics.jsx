import React from "react";

const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
     <div>
      

       <span>good:{good} </span>
       <span>neutral:{neutral} </span>
       <span>bad:{bad} </span>

       <span>total:{total} </span>

       <span>
         Positive feedback:{positivePercentage} %
       </span>
     </div>

)

export default Statistics;