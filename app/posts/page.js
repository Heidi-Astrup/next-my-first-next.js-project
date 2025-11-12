import Link from "next/link";
import styles from "./../page.module.css";

export default async function Posts() {
  const url = "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json";
  const response = await fetch(url);
  const dataObject = await response.json();
  console.log("data", dataObject);

  const posts = Object.keys(dataObject).map((key) => {
    return { id: key, ...dataObject[key] };
  });

  console.log("posts: ", posts);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>This is posts</h1>
        <section>
          <ol className={styles.liste}>
            {posts.map((post) => {
              return (
                <li key={posts.id}>
                  <Link href={`/posts/${post.id}`}>{post.caption}</Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </div>
  );
}
