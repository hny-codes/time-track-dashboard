'use client';

import styles from '../styles/dashboard.module.css';
import ProfileCard from './ProfileCard';
import { useState } from 'react';
import TimeCard from './TimeCard';

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
    <div className={styles.container}>
      <ProfileCard
        name='Jeremy Robson'
        image='/images/image-jeremy.png'
        timePeriod={timePeriod}
        handleDaily={handleDaily}
        handleWeekly={handleWeekly}
        handleMonthly={handleMonthly}
      />
      <div className={styles.grid}>
        <TimeCard
          image='/images/icon-work.svg'
          reportType='Work'
          timePeriod={timePeriod}
        />
        <TimeCard
          image='/images/icon-play.svg'
          reportType='Play'
          timePeriod={timePeriod}
        />
        <TimeCard
          image='/images/icon-study.svg'
          reportType='Study'
          timePeriod={timePeriod}
        />
        <TimeCard
          image='/images/icon-exercise.svg'
          reportType='Exercise'
          timePeriod={timePeriod}
        />
        <TimeCard
          image='/images/icon-social.svg'
          reportType='Social'
          timePeriod={timePeriod}
        />
        <TimeCard
          image='/images/icon-self-care.svg'
          reportType='Self Care'
          timePeriod={timePeriod}
        />
      </div>
    </div>
  );
}
