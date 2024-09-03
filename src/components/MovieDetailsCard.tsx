import { Link } from 'react-router-dom'

const MovieDetailsCard = ({ movie, imageUrl, pageUrl }) => {
  const valuation = Math.round(movie.vote_average) < 7 ? 'bg-red-600' : 'bg-green-600'

  return (
    <div>
      <div className='absolute top-0 right-0 left-0 h-screen w-full'>
        <img
          className='img-details object-cover h-full  w-full'
          src={`https://image.tmdb.org/t/p/original/${imageUrl}.jpg`}
        />
      </div>
      <div className='text-white w-full lg:w-[70%] flex flex-col gap-4 absolute bottom-0 lg:top-0 mt-[40%] lg:mt-[15%] p-4 lg:p-40'>
        <h1 className='text-4xl md:text-5xl text-left font-bold'>{movie.title}</h1>
        <span className='text-gray-400'>{movie.release_date}</span>
        <span className={`${valuation} text-white text-lg rounded-full w-8 h-8 flex items-center justify-center font-bold`}>{Math.round(movie.vote_average)}</span>
        <span className='text-gray-400'>{movie.tagline}</span>
        <p className='text-pretty text-gray-300 text-[12px] md:text-[17px] font-semibold'>{movie.overview}</p>
          <div className='flex gap-8 items-center text-lg'>
            <Link 
            to={pageUrl} 
            target='_blank' 
            className='flex px-4 rounded-md items-center gap-6 py-1 bg-[#A458FF]/50 hover:bg-transparent hover:text-white' rel='noreferrer'>
              Ver pelicula
            </Link>
          </div>
      </div>
    </div>
  )
}

export default MovieDetailsCard
