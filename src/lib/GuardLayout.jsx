import { useIsLoginState } from '@/context/IsLoginContext'
import LoginPage from '@/Pages/Login/LoginPage'
import { Layout } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const GuardLayout = ({ children }) => {
  const isLogin = useIsLoginState()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!(isLogin && location.state)) {
      alert('잘못된 접근입니다.')
      navigate('/', { replace: true })
    }
  }, [isLogin, location.state, navigate])

  if (!(isLogin && location.state)) {
    return <div>Redirecting...</div>
  }

  return <>{children}</>
}

export default GuardLayout
