import { Map } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen w-25">
      <nav className="flex-1 overflow-y-auto mt-2">
        <div className="flex flex-col items-center space-y-4 p-2">
          <Link
            to="/Map"
            className="flex flex-col items-center gap-1 rounded-md w-full px-2 py-2 text-sm"
          >
            <Map size={20} />
            <span className="text-center text-xs">Map</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
