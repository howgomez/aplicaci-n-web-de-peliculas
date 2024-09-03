import { useState, useRef, useEffect } from 'react'

const UserMenu = ({ username, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  

  // Cierra el menú cuando se hace clic fuera del menú
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false)
    
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      <button
        className='bg-[#A458FF]/90 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold'
        onClick={toggleMenu}
      >
        {username[0].toUpperCase()}
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50'>
          <div className='text-black pl-4'>
            <h1>Bievenido!</h1>
            <span>@{username}</span>
          </div>
          <a href='#' className='block px-4 py-2 text-sm text-gray-700 cursor-default'>
            Ver tu perfil
          </a>
          <a href='#' className='block px-4 py-2 text-sm text-gray-700 cursor-default'>
            Configuración
          </a>
          <button 
            onClick={handleLogout} 
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full'>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
