import React, { useState, useRef, useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Cierra el menú cuando se hace clic fuera del menú
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
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
        className='z-50 text-white rounded-full flex items-center justify-center'
        onClick={toggleMenu}
      >
        {
          isOpen ? <GrClose className='text-white size-7' /> : <RxHamburgerMenu className='text-white size-7' />
        }
      </button>
      {isOpen && (
        <div className='absolute z-20 left-0 w-48 bg-white rounded-xl'>
          <div className='text-black pl-4 opacity-45 py-2'>
            <span>Menu</span>
          </div>
          <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Inicio
          </a>
          <Link to='/search' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Buscar
          </Link>
          <a href='#populares' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
            Populares
          </a>

        </div>
      )}
    </div>
  )
}

export default MenuHamburguer
