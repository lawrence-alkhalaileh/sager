import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-extrabold text-primary font-mono"
          >
            Sager
          </Link>

          <div className="flex items-center space-x-6">
            <button className="p-2 rounded-full hover:bg-muted transition">
              <img
                src="/Icon/bell.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition">
              <img
                src="/Icon/language-svgrepo-com.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition">
              <img
                src="/Icon/capture-svgrepo-com.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
            </button>

            <div className="flex items-center space-x-3 border-l pl-4 ml-2">
              <div className="leading-tight hidden md:block">
                <p className="font-semibold text-sm">Hello, Mohammed Omar</p>
                <p className="text-xs text-muted-foreground">
                  Technical Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
