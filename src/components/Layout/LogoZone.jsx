import { Link } from 'react-router-dom'

export default function LogoZone() {
  return (
    <Link to='/'>
      <img
        src='../src/assets/galaxy_logo.jpg'
        alt='logo'
        className='w-56 h-full border rounded-3xl'
      />
    </Link>
  )
}
