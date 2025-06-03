import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Chess App</h1>
          <p className="text-gray-600">
            Amenitiz Front-end Technical Challange
          </p>
        </div>
        <Link
          to="/grandmasters"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          View Grandmasters
        </Link>
      </div>
    </div>
  );
};

export default Home;
