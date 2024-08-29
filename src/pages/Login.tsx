import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   try {
      e.preventDefault()
      login(email, password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit">Login</button>
  </form> 
  )
}

export default Login
