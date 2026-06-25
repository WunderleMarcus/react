import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <NavLink to="/">Home sweet Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/users">Users im System</NavLink>
      <NavLink to="/dashboard">Dashboard meiner Seite</NavLink>
      <NavLink to="/login">Login zur Anwendung</NavLink>
    </nav>
  );
}

export default Navbar;