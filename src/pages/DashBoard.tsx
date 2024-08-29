import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import UserMenu from '../components/UserMenu'
import { CiSearch } from 'react-icons/ci'
import ListMovies from '../components/dashboard/ListMovies'
import Navigation from '../components/Navigation'
import wallpapaer from '../assets/wallpaper.jpg'
const Dashboard = () => {
  return (
    <main className='bg-gray-950'>
      <div>
        <aside className='w-screen h-screen bg-black'>
          <img
            src={wallpapaer}
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
