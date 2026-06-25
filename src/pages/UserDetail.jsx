import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  return (
    <>
      <h2>User Detail</h2>
      <p>User ID: {id}</p>
    </>
  );
}

export default UserDetail;