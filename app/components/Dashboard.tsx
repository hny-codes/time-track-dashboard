'use client';

import ProfileCard from './ProfileCard';
import { useState } from 'react';

export type TimePeriod = {
  period: 'daily' | 'weekly' | 'monthly';
};

export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>({ period: 'daily' });

  const handleDaily = () => {
    setTimePeriod({ period: 'daily' });
  };

  const handleWeekly = () => {
    setTimePeriod({ period: 'weekly' });
  };

  const handleMonthly = () => {
    setTimePeriod({ period: 'monthly' });
  };

  return (
    <div>
      <ProfileCard
        name='Jeremy Robson'
        image='/images/image-jeremy.png'
        timePeriod={timePeriod}
        handleDaily={handleDaily}
        handleWeekly={handleWeekly}
        handleMonthly={handleMonthly}
      />
    </div>
  );
}
