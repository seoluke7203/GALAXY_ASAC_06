import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  )
}

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    //헤더
    <div className='flex flex-col items-center w-full border-b border-solid'>
      {/*  헤더 네비 */}
      <div className='flex flex-row items-center justify-center w-full px-8 h-24 '>
        {/* 헤더 네비 wrap */}
        <div className='flex flex-row items-center justify-start max-w-7xl w-full h-14 gap-5  '>
          {/* 로고 영역 */}
          <div className='relative w-56 h-full bg-slate-400'>로고 영역(이미지 필요)</div>
          {/* 검색 영역 */}
          <div className='items-start relative max-w-md'>
            {/* <Command className='rounded-xl border md:min-w-[450px]'>
              <CommandInput />
            </Command> */}
            <Input
              type='text'
              placeholder='Search...'
              className='rounded-full h-12 text-base border pl-5 pr-4 py-2 md:min-w-[450px]'
            />
            <div className='absolute inset-y-0 right-5 flex items-center'>
              <SearchIcon className='w-5 h-5 text-muted-foreground' />
            </div>
          </div>
          {/* 유저 버튼 영역 */}
          <div className='flex flex-row justify-end items-center gap-5 h-4 rounded-md flex-1 text-nowrap'>
            {isLogin ? (
              <ul className='flex flex-row items-center h-10 gap-5 rounded-md whitespace-nowrap list-none'>
                <li>로그아웃</li>
                <li>내정보</li>
                <li>마이페이지</li>
              </ul>
            ) : (
              <ul className='flex flex-row items-center h-10 gap-5 rounded-md whitespace-nowrap list-none'>
                <li>
                  <Link to='/login'>로그인</Link>
                </li>

                <li>
                  <Link to='/'>회원가입</Link>
                </li>

                <li>
                  <Link to='/'>마이페이지</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* 장르 영역 */}
      <div className='flex flex-row justify-center w-full h-12 px-8 items-center '>
        <div className='flex flex-row items-center max-w-7xl w-full h-12 gap-5 list-disc my-4 ps-10'>
          <ul className='flex flex-row h-10 gap-5 rounded-md whitespace-nowrap list-none'>
            <GenreNavi />
          </ul>
        </div>
      </div>
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
    <>
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
    </>
  )
}

export default Header
