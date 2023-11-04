import Dashboard from './components/Dashboard';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Dashboard />
      </div>
    </main>
  );
}
