import { Link } from 'react-router-dom'

const CardMovies = ({ movie }) => {
  return (
    <div className='card__movies h-full'>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h3 className=' text-left font-bold text-sm mt-8 p-2 text-white'>{movie.title}</h3>
        </Link>
      </div>
    </div>
  )
}
export default CardMovies
