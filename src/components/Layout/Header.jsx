import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import LogoZone from '@/components/Layout/LogoZone'
import SearchZone from '@/components/Layout/SearchZone'

const UserNavi = ({ isLogin }) => {
  return (
    <div className='flex flex-row justify-end items-center gap-5 h-4 rounded-md flex-1 text-nowrap'>
      {isLogin ? (
        <ul className='flex flex-row items-center h-10 gap-5 pr-4 rounded-md whitespace-nowrap list-none'>
          <li>로그아웃</li>
          <li>내정보</li>
          <li>마이페이지</li>
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
            <Link to='/'>마이페이지</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

const GenreNavi = () => {
  const genreList = [
    {
      id: 1,
      genreName: '뮤지컬',
      link: '/',
    },
    {
      id: 2,
      genreName: '콘서트',
      link: '/',
    },
    {
      id: 3,
      genreName: '공연',
      link: '/',
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
              <Link to={`${genre.link}`} state={{ genre: genre.genreName }}>
                {genre.genreName}
              </Link>
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
  const [isLogin, setIsLogin] = useState(false)
  const [genre, setGenre] = useState('뮤지컬')

  return (
    <div className='flex flex-col items-center w-full min-w-[1152px] border-b border-solid '>
      {/*  헤더 네비 */}
      <NaviZone>
        <LogoZone />
        <SearchZone />
        <UserNavi isLogin={false} />
      </NaviZone>

      {/* 장르 영역 */}
      <GenreNavi />
    </div>
  )
}

export default Header
