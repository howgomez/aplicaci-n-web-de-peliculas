import InputBtn from '../components/search/InputBtn'
import useFetchMovies from '../hooks/useFetchMovies'
import { useState } from 'react'
import CardMovies from '../components/search/CardMovies'
import Navigation from '../components/Navigation'

const Search = () => {
  const [value, setValue] = useState('')
  const data = useFetchMovies(value)

  return (
    <div className='bg-gray-950'>
      <Navigation display='hidden' />

      <InputBtn value={value} setValue={setValue} />

      <div className='flex flex-col items-center justify-center p-8 mt-2 '>
        <div className='flex flex-wrap gap-4 w-[95%] m-auto'>
          {data && data.results ? data.results.map((movie) => ( <CardMovies key={movie.id} movie={movie} />)): <p className='text-white m-auto'>No results found...</p>}
        </div>
      </div>
    </div>
  )
}

export default Search
