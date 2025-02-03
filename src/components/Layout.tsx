import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Sidebar />
      <div className="w-full h-full md:w-[calc(100vw-60px)] md:ml-[60px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
