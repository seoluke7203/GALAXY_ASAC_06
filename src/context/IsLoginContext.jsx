import { createContext, useState, useMemo, useContext } from 'react'

const userId = sessionStorage.getItem('id')
const token = sessionStorage.getItem('token')

export const IsLoginContext = createContext({
  isLogin: userId !== null && token !== null ? true : false,
  setIsLogin: null,
})

export function IsLoginProvider({ children }) {
  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨
  const [isLogin, setIsLogin] = useState(userId !== null && token !== null ? true : false)
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin])
  return <IsLoginContext.Provider value={value}> {children} </IsLoginContext.Provider>
}

export function useIsLoginState() {
  const context = useContext(IsLoginContext)
  if (!context) {
    throw new Error('Cannot find IsLoginProvider')
  }
  return context.isLogin
}

export default IsLoginProvider
