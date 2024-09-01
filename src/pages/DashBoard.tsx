import ListMovies from '../components/dashboard/ListMovies'
import Navigation from '../components/Navigation'
import { useMediaQuery } from '@uidotdev/usehooks'

const Dashboard = () => {
  const isMobile = useMediaQuery('(min-width: 1220px)')

  const backdrop_path = 'https://image.tmdb.org/t/p/original//fypydCipcWDKDTTCoPucBsdGYXW.jpg.jpg'
  const poster_path = 'https://image.tmdb.org/t/p/original//gKkl37BQuKTanygYQG1pyYgLVgf.jpg.jpg'
  const imageUrl = isMobile ? backdrop_path : poster_path

  return (
    <main className='bg-gray-950'>
      <div>
        <aside className='w-screen h-screen bg-black'>
          <img
            src={imageUrl}
            alt='Walpapper'
            className='w-full z-20 h-full opacity-75'
          />
        </aside>
        <div className='flex flex-col w-full h-screen absolute top-0 text-white z-50'>
          <div className='fixed right-0 left-0'>
            <Navigation />
          </div>
        </div>
      </div>
      <div className='w-full m-auto flex flex-col justify-center items-center'>
        <ListMovies />
      </div>
    </main>
  )
}

export default Dashboard
