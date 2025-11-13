import Image from "next/image";
import styles from "../../page.module.css";

export default async function UserDetail({ params }) {
  const { id } = await params;
  console.log("user id:", id);

  //const url = `https://fb-rest-race-default-rtdb.firebaseio.com/users/${userId}.json`;
  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const user = await response.json();
  console.log("use: ", user);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{user.name}</h1>
        <p>{user.mail}</p>
        <Image
          src={user.image}
          alt={user.name}
          width={300}
          height={300}
          className="post-image"
        ></Image>
      </main>
    </div>
  );
}
