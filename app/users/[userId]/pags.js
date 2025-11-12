export default async function UserDetail({ params }) {
  const { userId } = await params;
  console.log("post id:", userId);
  return (
    <div>
      <h1>User detail page for user nr. {userId}</h1>
    </div>
  );
}
