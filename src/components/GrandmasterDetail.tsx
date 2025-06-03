import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Hash,
  Trophy,
  Calendar,
  Clock,
  BarChart3,
  Globe,
  Flag,
  Shield,
  Video,
} from "lucide-react";
import useGrandmasterDetail from "../hooks/useGrandmasterDetail";
import useLastOnline from "../hooks/useLastOnline";
import { formatDate } from "../libs/helpers";

interface Props {
  username?: string;
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "online":
      return "text-green-600 bg-green-100";
    case "offline":
      return "text-gray-600 bg-gray-100";
    default:
      return "text-blue-600 bg-blue-100";
  }
};

const GrandmasterDetail = ({ username }: Props) => {
  const { grandmaster, loading, error } = useGrandmasterDetail(username || "");
  const lastOnlineText = useLastOnline(grandmaster?.last_online || 0);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          <p className="text-lg text-gray-600">
            Loading grandmaster details...
          </p>
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
          <Link
            to="/grandmasters"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Back to Grandmasters
          </Link>
        </div>
      </div>
    );
  }

  if (!grandmaster) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            No Data Found
          </h2>
          <p className="text-gray-500 mb-4">
            Unable to find details for this grandmaster.
          </p>
          <Link
            to="/grandmasters"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Back to Grandmasters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/grandmasters"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Grandmasters
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white font-bold text-2xl">GM</span>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{grandmaster.username}</h1>
                {grandmaster.title && (
                  <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    {grandmaster.title}
                  </span>
                )}
              </div>
              <p className="text-blue-100 text-lg">@{grandmaster.username}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    grandmaster.status
                  )}`}
                >
                  {grandmaster.status}
                </span>
                {grandmaster.is_streamer && (
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Video className="w-3 h-3" />
                    <span>Streamer</span>
                  </span>
                )}
                {grandmaster.verified && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Basic Information
              </h3>
              {grandmaster.country && (
                <div className="flex items-center space-x-2">
                  <Flag className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{grandmaster.country}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  {grandmaster.followers.toLocaleString()} followers
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Hash className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  Player ID: {grandmaster.player_id}
                </span>
              </div>
              {grandmaster.league && (
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">
                    League: {grandmaster.league}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Chess Information
              </h3>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  Title: {grandmaster.title || "GM"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <a
                  href={grandmaster.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Profile URL
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Activity
              </h3>

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  Joined: {formatDate(grandmaster.joined)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  Last online: {lastOnlineText}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  Status: {grandmaster.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandmasterDetail;
