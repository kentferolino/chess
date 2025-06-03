import useGrandmasters from "../hooks/useGrandmasters";
import Grandmaster from "./Grandmaster";

const GrandmastersList = () => {
  const { grandmasters, loading, error } = useGrandmasters();

  if (loading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          <p className="text-lg text-gray-600">Loading grandmasters...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Chess Grandmasters
        </h1>
        <p className="text-lg text-gray-600">
          Complete list of titled Chess Grandmasters ({grandmasters.length}{" "}
          total)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {grandmasters.map((gm) => (
          <Grandmaster key={gm} name={gm} />
        ))}
      </div>
    </div>
  );
};

export default GrandmastersList;
