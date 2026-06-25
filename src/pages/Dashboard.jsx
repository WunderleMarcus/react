import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="dashboard-links">
        <Link to="profile">Profil</Link>
        <Link to="settings">Settings</Link>
      </div>

      <hr />

      <Outlet />
    </>
  );
}

export default Dashboard;