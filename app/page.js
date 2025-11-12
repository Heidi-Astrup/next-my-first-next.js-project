import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hej, dette er mit første Next projekt!</h1>
        <h2>Hello, Heidi</h2>
      </main>
    </div>
  );
}
