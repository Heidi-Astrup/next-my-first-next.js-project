import Link from "next/link";
import styles from "./../page.module.css";

export default async function Users() {
  const url = "https://fb-rest-race-default-rtdb.firebaseio.com/users.json";
  const response = await fetch(url);
  const userDataObject = await response.json();
  console.log("data", userDataObject);

  const users = Object.keys(userDataObject).map((key) => {
    return { id: key, ...userDataObject[key] };
  });
  console.log("users: ", users);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Burgere</h1>
        <section>
          <h2>Her er en liste med brugere</h2>
          <ol className={styles.liste}>
            {users.map((user) => {
              return (
                <li key={users.id}>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </div>
  );
}
