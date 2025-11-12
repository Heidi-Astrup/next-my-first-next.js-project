import styles from "../../page.module.css";

export default async function PostDetail({ params }) {
  const { Id } = await params;
  console.log("post id:", Id);

  const url = `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${Id}.json`;
  const response = await fetch(url);
  const post = await response.json();
  console.log("pst: ", post);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Post detail page for page: {post.caption}</h1>
      </main>
    </div>
  );
}
