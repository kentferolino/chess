import axios from "axios";
import { useEffect, useState } from "react";

interface GrandmasterDetail {
  "@id?": string;
  country?: string;
  followers: number;
  is_streamer: boolean;
  joined: number;
  last_online: number;
  league?: string;
  player_id: number;
  status: string;
  title?: string;
  url: string;
  username: string;
  verified: string;
}

const useGrandmasterDetail = (username: string) => {
  const [grandmaster, setGrandmaster] = useState<GrandmasterDetail | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGrandmasterDetail = async () => {
      if (!username) return;

      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<GrandmasterDetail>(
          `https://api.chess.com/pub/player/${username}`
        );
        setGrandmaster(response.data);
      } catch (err) {
        setError(
          "Failed to fetch grandmaster details. Please try again later."
        );
        console.error("Error fetching grandmaster details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGrandmasterDetail();
  }, [username]);

  return { grandmaster, loading, error };
};

export default useGrandmasterDetail;
