import { useState, useEffect, useRef } from 'react';

const useFetchMovies = (value: string) => {
  const [data, setData] = useState<any>(null);
  const cache = useRef<{ [key: string]: any }>({});

  const API_KEY = import.meta.env.VITE_API_KEY 

  useEffect(() => {
    if (!value) return;

    const fetchData = async () => {
      if (cache.current[value]) {
        setData(cache.current[value]);
        
      } else {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}&include_adult=false&language=en-US&page=1`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          const result = await response.json();
          cache.current[value] = result;
          setData(result);
        } catch (error) {
          console.error('Error al buscar películas:', error);
          setData(null);
        }
      }
    };

    fetchData();
  }, [value]);

  return data;
};

export default useFetchMovies;
