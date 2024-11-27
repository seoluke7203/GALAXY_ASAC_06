import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import LogoZone from '@/components/Layout/LogoZone'
import SearchZone from '@/components/Layout/SearchZone'
import PrepAlert from '@/components/ui/prepAlert'
import { IsLoginContext, useIsLoginState } from '@/context/IsLoginContext'

const UserNavi = () => {
  const isLogin = useIsLoginState()
  const { setIsLogin } = useContext(IsLoginContext)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const logout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('id')

      setIsLogin(false)
    }
  }

  return (
    <div className='flex flex-row justify-end items-center gap-5 h-4 rounded-md flex-1 text-nowrap'>
      {isLogin ? (
        <ul className='flex flex-row items-center h-10 gap-5 pr-4 rounded-md whitespace-nowrap list-none'>
          <li>
            <Link to='/' onClick={logout}>
              로그아웃
            </Link>
          </li>
          <li>내정보</li>
          <li>
            <div className='cursor-pointer' onClick={openModal}>
              마이페이지
            </div>
          </li>
        </ul>
      ) : (
        <ul className='flex flex-row items-center h-10 gap-5 pr-4 rounded-md whitespace-nowrap list-none'>
          <li>
            <Link to='/login'>로그인</Link>
          </li>

          <li>
            <Link to='/register'>회원가입</Link>
          </li>

          <li>
            <div className='cursor-pointer' onClick={openModal}>
              마이페이지
            </div>
          </li>
        </ul>
      )}

      {isModalOpen && <PrepAlert message='아직 준비중입니다!' closeModal={closeModal} />}
    </div>
  )
}

const GenreNavi = () => {
  const genreList = [
    {
      id: 1,
      genreName: '뮤지컬',
      link: 'musical',
    },
    {
      id: 2,
      genreName: '콘서트',
      link: 'concert',
    },
    {
      id: 3,
      genreName: '공연',
      link: 'theater',
    },
  ]
  return (
    <div className='flex flex-row justify-center w-full h-12 px-[50px] items-center '>
      <div className='flex flex-row items-center max-w-7xl w-full h-12 gap-5 list-disc my-4'>
        <ul className='flex flex-row h-10 gap-5 rounded-md whitespace-nowrap list-none'>
          {genreList.map((genre) => (
            <li
              key={genre.id}
              className='flex items-center h-10 font-bold text-base hover:border-b-2 hover:border-black'
            >
              <Link to={`/${genre.link}`}>{genre.genreName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const NaviZone = ({ children }) => {
  return (
    <div className='flex flex-row items-center justify-center w-full px-[50px] h-24 '>
      {/* 헤더 네비 wrap */}
      <div className='flex flex-row items-center justify-start max-w-7xl w-full h-14 gap-5  '>
        {children}
      </div>
    </div>
  )
}

const Header = () => {
  // const [genre, setGenre] = useState('뮤지컬')

  return (
    <div className='flex flex-col items-center w-full min-w-[1152px] border-b border-solid '>
      {/*  헤더 네비 */}
      <NaviZone>
        <LogoZone />
        <SearchZone />
        <UserNavi />
      </NaviZone>

      {/* 장르 영역 */}
      <GenreNavi />
    </div>
  )
}

export default Header
