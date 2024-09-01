import { Link, useNavigate } from 'react-router-dom'
import UserMenu from './UserMenu'
import { useAuth } from '../context/AuthContext'
import { CiSearch } from 'react-icons/ci'
import MenuHamburguer from './MenuHamburguer'

const Navigation = ({ display }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login') // Redirige a la página de login después de cerrar sesión
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  const symbolName = user?.displayName.split('')
  return (
    <div className='bg-black/40 z-20  rounded-xl px-4 py-2 w-[95%] flex items-center justify-between gap-1 text-sm m-auto mt-2 text-white '>
      <nav className='flex font-bold text-[16px] gap-20'>
        <Link to='/dashboard'>Inicio</Link>
        <a href='/#popular'>Populares</a>
      </nav>
      <nav className='flex gap-6 items-center text-white'>
        <Link to='/search' className={display}>
          <CiSearch className='size-8' />
        </Link>
        <UserMenu username={symbolName} handleLogout={handleLogout} />
      </nav>
    </div>
  )
}

export default Navigation
