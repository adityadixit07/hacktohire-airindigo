import { useState, useEffect } from "react";
import { getFlights } from "../services/api";

function useFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFlights() {
      try {
        const data = await getFlights();
        setFlights(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchFlights();
  }, []);

  return { flights, loading, error };
}

export default useFlights;
