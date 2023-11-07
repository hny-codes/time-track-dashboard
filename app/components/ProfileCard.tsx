import styles from '../styles/profilecard.module.css';
import Image from 'next/image';
import type { TimePeriod } from './Dashboard';

type Props = {
  name: string;
  image: string;

  timePeriod: TimePeriod;
  handleDaily(): void;
  handleMonthly(): void;
  handleWeekly(): void;
};

export default function ProfileCard({
  name,
  image,
  timePeriod,
  handleDaily,
  handleMonthly,
  handleWeekly,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.social}>
        <div className={styles['mobile-image']}>
          <Image
            src={image}
            alt=''
            width={60}
            height={60}
            className={styles.border}
          />
        </div>
        <div className={styles['desktop-image']}>
          <Image
            src={image}
            alt=''
            width={80}
            height={80}
            className={styles.border}
          />
        </div>
        <div>
          <h1>
            Report for <br />
            <span className={styles.name}>{name}</span>
          </h1>
        </div>
      </div>
      <div className={styles['btn-list']}>
        <button
          onClick={handleDaily}
          className={`${styles.btn} ${
            timePeriod.period === 'daily' && styles['btn-active']
          }`}
        >
          Daily
        </button>
        <button
          onClick={handleWeekly}
          className={`${styles.btn} ${
            timePeriod.period === 'weekly' && styles['btn-active']
          }`}
        >
          Weekly
        </button>
        <button
          onClick={handleMonthly}
          className={`${styles.btn} ${
            timePeriod.period === 'monthly' && styles['btn-active']
          }`}
        >
          Monthly
        </button>
      </div>
    </section>
  );
}
