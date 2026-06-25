import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="app-container">
      <h1>React Router Demo in 25-11</h1>

      <Navbar />

      <hr />

      <Outlet />
    </div>
  );
}

export default MainLayout;