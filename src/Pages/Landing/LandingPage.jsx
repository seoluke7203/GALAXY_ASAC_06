import { useLocation } from 'react-router'

export default function LandingPage() {
  const location = useLocation()
  const { genre } = location.state || { genre: '뮤지컬' }

  return (
    <div className='flex flex-col items-center min-h-[1000px]'>
      <div className='flex flex-row items-center'>
        <h1 className='text-3xl font-bold underline'>Welcome to {genre} Landing Page!</h1>
      </div>
    </div>
  )
}
