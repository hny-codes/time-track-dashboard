import styles from '../styles/timecard.module.css';
import type { TimePeriod } from './Dashboard';
import fetchData from '@/util/fetchData';
import Image from 'next/image';
import React, { createRef, useRef } from 'react';

type Props = {
  reportType: 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care';
  image: string;
  timePeriod: TimePeriod;
};

// Background Card
const Background = ({ image, reportType }: Partial<Props>) => {
  switch (reportType) {
    case 'Work':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-work']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
    case 'Play':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-play']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
    case 'Study':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-study']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
    case 'Exercise':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-exercise']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
    case 'Self Care':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-selfcare']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
    case 'Social':
      return (
        <div
          className={`${styles['background-card']} ${styles.card} ${styles['bg-social']}`}
        >
          <Image src={image as string} alt='' fill className={styles.image} />
        </div>
      );
  }
};

// Time Content Component
const Content = ({ timePeriod, reportType }: Partial<Props>) => {
  const { daily, weekly, monthly } = fetchData(reportType as string);
  const bgRef = createRef<HTMLDivElement>();
  const btnRef = createRef<HTMLButtonElement>();

  if (!timePeriod?.period) {
    return false;
  }

  const handleBgHover = () => {
    bgRef.current?.classList.add(styles.hover);
  };

  const handleBgLeave = () => {
    bgRef.current?.classList.remove(styles.hover);
  };

  const handleBtnHover = () => {
    bgRef.current?.classList.add(styles.non);
  };

  // Component - display current time
  const CurrentTime = () => {
    return (
      <p className={styles.current}>
        {timePeriod.period === 'daily' && daily.current}
        {timePeriod.period === 'monthly' && monthly.current}
        {timePeriod.period === 'weekly' && weekly.current}
        hrs
      </p>
    );
  };

  // Component - display previous time
  const PreviousTime = () => {
    return (
      <p className={styles.previous}>
        Last Week - {timePeriod.period === 'daily' && daily.previous}
        {timePeriod.period === 'monthly' && monthly.previous}
        {timePeriod.period === 'weekly' && weekly.previous}
        hrs
      </p>
    );
  };

  return (
    <div
      // onMouseOver={handleBgHover}
      // onMouseLeave={handleBgLeave}
      ref={bgRef}
      className={`${styles['text-card']} ${styles.card}`}
    >
      <div className={styles['text-current']}>
        <h2 className={styles.title}>{reportType}</h2>
        <CurrentTime />
      </div>
      <div className={styles.ellipses}>
        <button
          // onMouseEnter={handleBgLeave}
          ref={btnRef}
          className={styles.btn}
        >
          <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
              fill='#BBC0FF'
              fillRule='evenodd'
            />
          </svg>
        </button>
        <PreviousTime />
      </div>
    </div>
  );
};

// Time Card Component
export default function TimeCard({ image, timePeriod, reportType }: Props) {
  return (
    <section className={`${styles.card} ${styles.container}`}>
      <Background image={image} reportType={reportType} />
      <Content timePeriod={timePeriod} reportType={reportType} />
    </section>
  );
}
