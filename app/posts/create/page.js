import { redirect } from "next/dist/server/api-utils";
import styles from "../../page.module.css";
export default function CreatePost() {
  async function createPost(formData) {
    "use server";

    const caption = formData.get("caption");
    const image = formData.get("image");

    const newPost = {
      caption,
      image,
      uid: "OPPe5jue2Ghxx3mtnxevB5FwCYe2",
    };

    const response = await fetch(
      "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json",
      { method: "POST", body: JSON.stringify(newPost) }
    );

    if (response.ok) {
      redirect("/posts");
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Create post</h1>
        <form action={createPost}>
          <label htmlFor="caption">Caption</label>
          <input
            type="tect"
            id="caption"
            name="caption"
            placeholder="Write a caption here"
          ></input>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Paste image URL"
          ></input>
          <button>Create Post</button>
        </form>
      </main>
    </div>
  );
}
