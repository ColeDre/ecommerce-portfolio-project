const CURRENT_DATE = new Date();

// TODO: this needs to be set from backend
export const getDealEndDate = () => {
  const date = new Date();
  let dealEndsDay = date.getDate() <= 20 ? 20 : 4;
  let addMonth = dealEndsDay === 20 ? 0 : 1;

  // wontfix: setFullYear breaks dealCountDown when set past a year, Deals probably shouldn't be spanning multiple years at a time | USE TO TEST MONTHS | if 
  // date.setFullYear(2026)
  // date.setMonth(8) 

  // TODO: this may cause issues with locality, for scope of project won't worry but in broader picture something to keep in mind | also we would want to get this dealEnd Data from backend
  let dealEnds = {
    year: date.getFullYear(), 
    month: date.getMonth() + addMonth, 
    day: dealEndsDay, 
    hour: 0
  }

  const dealEndsDate = new Date(dealEnds.year, dealEnds.month, dealEnds.day, dealEnds.hour);

  return dealEndsDate;
}

export const totalRemainingDealDays = (endDate) => {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let year = endDate.getFullYear() - CURRENT_DATE.getFullYear();  
  let countYear = year >= 1 ? year * 11 : 0;
  let countMonths = (endDate.getMonth() - CURRENT_DATE.getMonth()) +  countYear;
  let monthsRemaining = [];
  let totalRemainingDays;

  if (endDate.getFullYear() % 4 === 0) daysInMonths[2] = 29;

  if ( countMonths !== 0 && countMonths > 0 ) {
    for (let i=0; i < countMonths; i++) {
      let followingMonth = CURRENT_DATE.getMonth() + 1;
      
      if (followingMonth + i > 11) { 
        monthsRemaining.push(daysInMonths[(followingMonth + i) - 11])
      } else {
        monthsRemaining.push(daysInMonths[followingMonth + i])
      };
      
    }

    totalRemainingDays = monthsRemaining.reduce((totalDays, monthDays) => {

      return totalDays + monthDays
    
    }) + endDate.getDate()
    
    totalRemainingDays = totalRemainingDays - CURRENT_DATE.getDate();

  } else {

    totalRemainingDays = endDate.getDate() - CURRENT_DATE.getDate();

  }

  return totalRemainingDays - 1;
}

export const isDealActive = () => {
  let dealDate = getDealEndDate();
  return dealDate >= CURRENT_DATE
}

export const initialCountdownDate = (endDate) => {
  return {
    days: totalRemainingDealDays(endDate),
    hours: (endDate.getHours() - CURRENT_DATE.getHours()) + 23,
    minutes: (endDate.getMinutes() - CURRENT_DATE.getMinutes()) + 59,
    seconds: (endDate.getSeconds() - CURRENT_DATE.getSeconds()) + 59,
  }
}
