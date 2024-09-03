import { useEffect, useState } from 'react'
import Card from './Card'

const ListMovies = () => {
  const [movies, setMovies] = useState([])

  const API_KEY = import.meta.env.VITE_API_KEY
  const url = ` https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
    }
    getMovies()
  }, [url])

  
  return (
    <div>
      <h1 id='populares' className='text-bold text-white text-left text-3xl p-6'>Populares</h1>
      <Card movie={movies} />
    </div>
  )
}

export default ListMovies
