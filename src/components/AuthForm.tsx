import React, { useState } from 'react'
import AuthFormFields from './AuthFormFields'
import AuthFormToggle from './AuthFormToggle'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { updateProfile } from 'firebase/auth'


const AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const errorLogin = () => {
    if(!email || !password) return (
      <div className=' bg-yellow-600/80 p-4 my-4 text-black font-semibold'>
        <p>Por favor, rellena todos los campos</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // if(!email || !password) return alert("Please fill in all fields");
    try {
      if (isRegister) {
        const userCredential = await register(email, password);
        if (userCredential.user) {
          await updateProfile(userCredential.user, { displayName: username });
        }
      } else {
        await login(email, password);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to authenticate", error);
    }
  };
  const wallpapaer = 'https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/6170ded0-9324-4d30-835c-805a8611c65a/AR-es-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a4790e7f-4b3f-443c-a77e-9df5a8dcb323_medium.jpg'

  return (
   <div className='w-full h-screen text-white relative'>
     <div>
       <img src={wallpapaer} alt='wallpapaer' className='w-full h-screen opacity-45 object-cover' />
     </div>
     <form onSubmit={handleSubmit} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[60%] bg-gray-950/80 rounded-xl p-14 border border-[#A458FF] flex flex-col gap-4 shadow-[0_0_10px_#A458FF]'>
     <h1 className='text-left font-bold text-4xl'>Inicia sesión</h1>
      <div>{errorLogin()}</div>
     <div className='flex flex-col gap-4 mt-6'>
     {isRegister && (
        <AuthFormFields
          label='Username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Nombre de Usuario'
        />
      )}
      <AuthFormFields
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Ingresa tu Email'
      />
      <AuthFormFields
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Ingresa tu Password'
      />
      <button className='w-full bg-[#A458FF] p-2 rounded-md hover:opacity-85 transition-all' type='submit'>{isRegister ? 'Register' : 'Login'}
        
      </button>
     <AuthFormToggle
        isRegister={isRegister}
        onToggle={() => setIsRegister(!isRegister)}
      />
     </div>
    </form>
   </div>
  )
}

export default AuthForm
