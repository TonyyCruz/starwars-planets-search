import { useState, useEffect } from 'react';

export default function useApi(url) {
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(url).then((resp) => resp.json());
      setApiResult(data);
    };
    fetchApi();
  }, [url]);
  return apiResult;
}
