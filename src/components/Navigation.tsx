import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">♛</span>
            <span className="text-xl font-bold text-gray-800">
              Chess GM Directory
            </span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition duration-200 ${
                isActive("/")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/grandmasters"
              className={`px-4 py-2 rounded-md transition duration-200 ${
                isActive("/grandmasters")
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Grandmasters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
