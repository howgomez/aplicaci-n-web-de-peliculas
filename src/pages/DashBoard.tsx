import ListMovies from '../components/dashboard/ListMovies'
import Navigation from '../components/Navigation'
import { useMediaQuery } from '@uidotdev/usehooks'
import useFetchById from '../hooks/useFetchById'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const isMobile = useMediaQuery('(min-width: 1220px)')
  const movie = useFetchById('823464')

  if (!movie) return <div>Loading...</div>
  
  const backdropPath = movie.backdrop_path
  const posterPath = movie.poster_path
  const imageUrl = isMobile ? backdropPath : posterPath
  const pageUrl = movie.homepage

  const valuation = Math.round(movie.vote_average) < 7 ? 'bg-red-600' : 'bg-green-600'

  return (
    <main className='bg-gray-950'>
      <div>
        <aside className='image-shadow z-20 bg-black flex self-center items-center'>
          <img
            src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
            alt='Walpapper'
            className='w-full z-20 opacity-65 h-dvh'
          />
          <div className='absolute text-white text-4xl top-dvh/2 left-dvh/2 w-full lg:w-[60%] text-pretty z-50 opacity-75 pl-10 font-extralight flex flex-col'>
            <h1 className='font-bold text-2xl lg:text-6xl tracking-[.35em]'>{movie.title}</h1>
            <div className='flex gap-4 text-base ml-2 mt-2 font-bold'>
              <span>{movie.release_date}</span>
            </div>
            <div className='z-40'>
              <span className={`${valuation} text-white text-lg rounded-full w-8 h-8 flex items-center justify-center font-bold m-2`}>{Math.round(movie.vote_average)}</span>
              <h2 className='font-bold text-lg ml-2 opacity-60'> {movie.tagline}</h2>
              <p className='text-base font-semibold ml-2'>{movie.overview}</p>
              <div className='flex gap-8 items-center text-lg mt-4'>
                <Link 
                  to={pageUrl} 
                  target='_blank' 
                  className='flex px-4 rounded-md items-center gap-6 py-1 bg-[#A458FF]/80 hover:bg-transparent hover:text-white'
                  rel='noreferrer'
                  >Ver pelicula
                </Link>
                <Link 
                  to={`/movie/${movie.id}`} 
                  className='flex px-4 rounded-md items-center gap-6 py-1 bg-[#A458FF]/80 hover:bg-transparent hover:text-white' 
                  rel='noreferrer'>
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <div className='flex flex-col w-full h-screen absolute top-0 text-white z-20'>
          <div className='fixed right-0 left-0'>
            <Navigation display='' />
          </div>
        </div>
      </div>
      <div>
        <ListMovies />
      </div>
    </main>
  )
}

export default Dashboard
