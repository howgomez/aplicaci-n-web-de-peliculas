import { useAuth } from '../context/AuthContext'
import InputBtn from '../components/search/InputBtn'
import useFetchMovies from '../hooks/useFetchMovies'
import { useEffect, useState } from 'react'
import CardMovies from '../components/search/CardMovies'
import Navigation from '../components/Navigation'
import NavBar from '../components/NavBar'
const Search = () => {
  const { user } = useAuth()

  const [value, setValue] = useState('')
  const data = useFetchMovies(value)

  console.log(data)

  return (
    <div className='bg-gray-950'>
      <NavBar />
      <InputBtn value={value} setValue={setValue} />
      <div className='flex flex-col items-center justify-center p-8 mt-2 '>
        <div className='flex flex-wrap gap-4 w-[95%] m-auto'>
          {data && data.results
            ? (
                data.results.map((movie) => (
                  <CardMovies key={movie.id} movie={movie} />
                ))
              )
            : (
              <p>No results found</p>
              )}
        </div>
      </div>
    </div>
  )
}

export default Search
