import Link from "next/link";
import styles from "./../page.module.css";

export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Burgere</h1>
        <section>
          <h2>Her er en liste med brugere</h2>
          <ol className={styles.liste}>
            <li>
              <Link href="/users/Hans">Hans Hansen</Link>
            </li>
            <li>
              <Link href="/posts/Jens">Jens Jensen</Link>
            </li>
            <li>
              <Link href="/posts/Mads">Mads Madsen</Link>
            </li>
            <li>
              <Link href="/posts/Marie">Marie Ingridsen</Link>
            </li>
            <li>
              <Link href="/posts/Richard">Richard Risum</Link>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
