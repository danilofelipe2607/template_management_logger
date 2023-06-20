import styles from "./page.module.css";
import Login from "./login/page";
import Home from "./home/page";

export default function App() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
