import dataObject from '../data/data.json';

export default function fetchData(title: string) {
  // Filter for the correct time report
  const result = dataObject.filter((data) => data.title === title);

  // Return the time for daily, weekly, and monthly
  const { daily, weekly, monthly } = result[0].timeframes;
  return { daily, weekly, monthly };
}
