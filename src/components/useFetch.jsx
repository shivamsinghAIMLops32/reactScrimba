import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // it will every single time
      }
    };

    fetchingData(); // Call the async function
  }, [url]); // Dependency on `url` to trigger the effect when it changes

  return { data, error, loading }; // Return as an object for easier consumption
};

export default useFetch;
