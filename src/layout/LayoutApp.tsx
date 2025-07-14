import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutApp = () => {
  return (
    <main className="">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutApp;
