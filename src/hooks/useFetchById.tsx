
import { useState, useEffect, useRef } from 'react'

const useFetchById = (id: string) => {
  const [data, setData] = useState<any>(null)
  const cache = useRef<{ [key: string]: any }>({})

  const API_KEY = import.meta.env.VITE_API_KEY // Reemplaza con tu API Key

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      if (cache.current[id]) {
        setData(cache.current[id]); // Usar datos cacheados si existen
      } else {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          const result = await response.json();
          cache.current[id] = result; // Guardar en caché
          setData(result);
        } catch (error) {
          console.error('Error al buscar películas:', error);
          setData(null); // En caso de error, limpia los datos
        }
      }
    };

    fetchData();
  }, [id]);

  return data;
};

export default useFetchById;