
import { useState, useEffect } from 'react'

const useFetchById = (id: string) => {
  const [data, setData] = useState<any>(null)

  const API_KEY = import.meta.env.VITE_API_KEY 

  useEffect(() => {
    const fetchID = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchID();
  }, [id]);

  return data;
};

export default useFetchById;