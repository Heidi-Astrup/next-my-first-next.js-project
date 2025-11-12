export default async function UserDetail({ params }) {
  const { id } = await params;
  console.log("user id:", id);

  //const url = `https://fb-rest-race-default-rtdb.firebaseio.com/users/${userId}.json`;
  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/users/${id}.json `
  );
  const user = await response.json();
  console.log("use: ", user);

  return (
    <div>
      <h1>User detail page for user nr. {id}</h1>
    </div>
  );
}
