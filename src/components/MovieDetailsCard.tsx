const MovieDetailsCard = ({ movie, imageUrl, pageUrl }) => {
  return (
    <div>
      <div className=' absolute top-0 right-0 left-0 h-screen w-full '>
        <img
          className='img-details object-cover h-full  w-full'
          src={`https://image.tmdb.org/t/p/original/${imageUrl}.jpg`}
        />
      </div>
      <div className='text-white w-full lg:w-[70%] flex flex-col gap-4 absolute bottom-0 mt-[40%] lg:mt-[15%] p-4 lg:p-40'>
        <h1 className='text-4xl md:text-4xl text-left font-bold'>{movie.title}</h1>
        <span className='text-gray-400'>{movie.release_date}</span>
        <span className='text-gray-400'>{movie.tagline}</span>
        <p className='text-pretty text-gray-300 text-[12px] md:text-[17px] font-semibold'>
          {movie.overview}
        </p>
        <div>
          <div className='flex gap-8 items-center text-lg'>
            <a href='' className='flex px-4 rounded-md items-center gap-6 py-1 bg-[#A458FF]/50 hover:bg-transparent hover:text-white'>Ver pelicula</a>
            <a href='' className='flex px-4 rounded-md items-center gap-6 py-1 bg-[#A458FF]/50 hover:bg-transparent hover:text-white'>Ver información</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsCard
