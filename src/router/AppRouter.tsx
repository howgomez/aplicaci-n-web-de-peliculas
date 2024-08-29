import { Routes, Route } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import ProtectedRoute from './ProtectedRoute'
import AuthForm from '../components/AuthForm'
import Search from '../pages/Search'
import MovieDetails from '../pages/MovieDetails'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthForm />} />
      <Route path='/login' element={<AuthForm />} />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
          }
      />
      <Route
        path='/search'
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      />
      <Route
        path='/movie/:id'
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRouter
