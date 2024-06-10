import styles from './page.module.css';
import CounterProvider from '@/components/organisms/Counter/Counter';
import CounterView from '@/components/view/CounterView/CounterView';

export default function Home() {
    return (
        <main className={styles.main}>
            <CounterProvider>
                <CounterView />
            </CounterProvider>
        </main>
    );
}
