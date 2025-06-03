import { useState, useEffect } from "react";
import { formatLastOnline } from "../libs/helpers";

const useLastOnline = (timestamp: number) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return formatLastOnline(timestamp, currentTime);
};

export default useLastOnline;
