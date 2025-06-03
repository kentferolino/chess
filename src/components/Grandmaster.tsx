import { useNavigate } from "react-router-dom";

interface GrandmasterProps {
  name: string;
}

const Grandmaster = ({ name }: GrandmasterProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/grandmasters/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 border border-gray-200 cursor-pointer hover:bg-gray-50"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Grandmaster;
