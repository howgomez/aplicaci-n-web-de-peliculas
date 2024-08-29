import { createContext, useContext, useEffect, useState } from 'react'
import { User,
onAuthStateChanged, 
createUserWithEmailAndPassword,
signInWithEmailAndPassword, 
signOut,
UserCredential,
setPersistence,
browserSessionPersistence } from 'firebase/auth'
import { auth } from '../services/firebase'

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ( { children } : { children: React.ReactNode } ) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string) => {
    try {
      await setPersistence(auth, browserSessionPersistence)
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  };

const register = async (email: string, password: string): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const logout = async () => {
  await signOut(auth)
};
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("User in onAuthStateChanged:", user)    
    setUser(user)
    setIsLoading(false)
  })
  return unsubscribe
},[])

if(isLoading) {
  return <div>Loading...</div>
}

return ( <AuthContext.Provider value={{user, login, register ,logout, isLoading}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context ) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}