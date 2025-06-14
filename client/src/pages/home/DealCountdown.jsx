import React, { useState, useEffect }  from "react";

import { totalRemainingDealDays, initialCountdownDate } from "../../utils/dealSectionUtils";

const DealCountdown = ({ endDate }) => {
  
  
  const countdownDate = initialCountdownDate(endDate)

  const [dealCountdown, setDealCountdown] = useState(countdownDate)
  
  
  useEffect(() => {
    const countdownId = setInterval(() => {
      setDealCountdown(() => {
        let currentTime = new Date();
        return {
          days: totalRemainingDealDays(endDate),
          hours: (endDate.getHours() - currentTime.getHours()) + 23,
          minutes: (endDate.getMinutes() - currentTime.getMinutes()) + 59,
          seconds: (endDate.getSeconds() - currentTime.getSeconds()) + 59,
        }
      })

      return () => clearInterval(countdownId);
    }, 1000)
  }, [])

  return (
    <div className='deals__countdown flex-wrap'>
      <div className='deals__countdown__card'>
        <h4>{dealCountdown.days}</h4>
        <p>Days</p>
      </div>
      <div className='deals__countdown__card'>
        <h4>{dealCountdown.hours}</h4>
        <p>Hours</p>
      </div>
      <div className='deals__countdown__card'>
        <h4>{dealCountdown.minutes}</h4>
        <p>Mins</p>
      </div>
      <div className='deals__countdown__card'>
        <h4>{dealCountdown.seconds}</h4>
        <p>Secs</p>
      </div>
    </div>
  );
};

export default DealCountdown;
