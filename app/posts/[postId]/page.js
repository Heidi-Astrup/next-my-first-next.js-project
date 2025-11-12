import styles from "../../page.module.css";

export default async function PostDetail({ params }) {
  const { postId } = await params;
  console.log("post id:", postId);

  const url = `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${postId}.json`;
  const response = await fetch(url);
  const post = await response.json();
  console.log("pst: ", post);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Post detail page for page: {postId}</h1>
      </main>
    </div>
  );
}
