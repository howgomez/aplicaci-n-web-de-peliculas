import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from '@uidotdev/usehooks'
import MovieDetailsCard from '../components/MovieDetailsCard'
import Navigation from '../components/Navigation'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const isMobile = useMediaQuery('(min-width: 768px)')

  const pageUrl = movie.homepage
  const imageUrl = isMobile ? movie.backdrop_path : movie.poster_path
  const APIKEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchID = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      )
      const data = await response.json()
      setMovie(data)
    }
    fetchID()
  }, [id])

  if (!movie) return <h1>Loading...</h1>

  return (
    <div className='bg-black w-screen h-screen'>
      <nav className='absolute top-0 left-0 right-0 z-20'>
        <Navigation />
      </nav>
      <div className='text-white absolute top-0 left-0 right-0 z-10' />
      <MovieDetailsCard movie={movie} imageUrl={imageUrl} pageUrl={pageUrl} />
    </div>
  )
}

export default MovieDetails
