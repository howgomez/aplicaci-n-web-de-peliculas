import { Link } from 'react-router-dom'

interface Props {
  movie: Movie[]
}

const Card = ({ movie }: Props) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-y-8'>
      {
        movie.map((movie) => (
         <div  key={movie.id} className='card__movies'> 
           <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3 className='text-left font-bold text-sm mt-8 p-2 text-white'>{movie.title}</h3>
          </Link>
         </div>
        ))
      }
    </div>
  )
}

export default Card
