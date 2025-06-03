import axios from "axios";
import { useEffect, useState } from "react";

interface GrandmastersResponse {
  players: string[];
}

const useGrandmasters = () => {
  const [grandmasters, setGrandmasters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGrandmasters = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<GrandmastersResponse>(
          "https://api.chess.com/pub/titled/GM"
        );
        setGrandmasters(response.data.players);
      } catch (err) {
        setError("Failed to fetch grandmasters. Please try again later.");
        console.error("Error fetching grandmasters:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGrandmasters();
  }, []);

  return { grandmasters, loading, error };
};

export default useGrandmasters;
