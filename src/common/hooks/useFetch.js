import React, { useState, useEffect } from "react";


const useFetch = (service) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await service();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {isLoading, data, error}
};

export default useFetch;
