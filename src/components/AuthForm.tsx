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

  return (
    <form onSubmit={handleSubmit}>
      {isRegister && (
        <AuthFormFields
          label='Username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <AuthFormFields
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthFormFields
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>{isRegister ? 'Register' : 'Login'}</button>
      <AuthFormToggle
        isRegister={isRegister}
        onToggle={() => setIsRegister(!isRegister)}
      />
    </form>
  )
}

export default AuthForm
