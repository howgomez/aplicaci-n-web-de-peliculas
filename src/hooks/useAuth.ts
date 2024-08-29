import { useState, useEffect } from 'react'
import { auth } from '../services/firebase'

const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return { user, loading }
}

export default useAuth
