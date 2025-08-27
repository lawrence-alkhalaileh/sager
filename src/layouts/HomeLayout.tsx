import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="flex h-screen">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
