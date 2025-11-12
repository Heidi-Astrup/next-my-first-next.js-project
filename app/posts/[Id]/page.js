import styles from "../../page.module.css";
import Image from "next/image";

export default async function PostDetail({ params }) {
  const { id } = await params;
  console.log("post id:", id);

  //const url = `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${id}.json`;
  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/posts/${id}.json`
  );
  const post = await response.json();
  console.log("pst: ", post);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{post.caption}</h1>
        <Image
          src={post.image}
          width="300"
          height="400"
          alt={post.caption}
          className="post-image"
        ></Image>
      </main>
    </div>
  );
}
