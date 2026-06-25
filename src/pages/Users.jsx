<div className="page">
  <h2>Users</h2>

  {users.map((user) => (
    <div
      key={user.id}
      style={{
        padding: "10px",
        marginBottom: "8px",
        background: "#f9fafb",
        borderRadius: "8px"
      }}
    >
      <Link to={`/users/${user.id}`}>
        👤 {user.name}
      </Link>
    </div>
  ))}
</div>