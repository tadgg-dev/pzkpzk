// src/hooks/useApi.js
import { useState, useEffect } from 'react';
import axios from 'axios';


const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const request = method === 'GET' ? axios.get(url) : axios.post(url, body);

    request
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [url, method, body]);

  return { data, isLoading, error };
};

export default useApi;