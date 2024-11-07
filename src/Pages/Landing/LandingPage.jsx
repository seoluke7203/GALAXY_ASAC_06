import EventComponent from '@/components/LandingComponent/EventBanner'
import MainBanner from '@/components/LandingComponent/MainBanner'
import SubBanner from '@/components/LandingComponent/SubBanner'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const subBannerContents = [
  {
    id: 1,
    title: 'TEST',
    genre: '뮤지컬',
    content: '내용1',
    link: '/ticketing',
    productSrc: '../src/assets/images/musicalTestImg.gif',
  },
  {
    id: 2,
    title: 'TEST2',
    genre: '뮤지컬',
    content: '내용2',
    link: '/ticketing',
    productSrc: '../src/assets/images/musicalTestImg.gif',
  },
  {
    id: 3,
    title: 'TEST3',
    genre: '뮤지컬',
    content: '내용3',
    link: '/ticketing',
    productSrc: '../src/assets/images/concertTestImg.gif',
  },
  {
    id: 4,
    title: 'TEST4',
    genre: '뮤지컬',
    content: '내용4',
    link: '/ticketing',
    productSrc: '../src/assets/images/concertTestImg.gif',
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
  // const location = useLocation()
  // const { genre } = location.state || { genre: '뮤지컬' }

  // const check = genreList.findIndex(data => data.link === genre)

  const params = useParams()
  const genre = params.genre || 'musical'
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
  const check = genreList.find((item) => item.link === genre)
  if (!check) {
    navigate('/')
  }

  const [mainBannerData, setMainBannerData] = useState([]) // 더미 데이터 세팅. 추후 변경
  const [subBannerData, setSubBannerData] = useState(subBannerContents) // 더미 데이터 세팅. 추후 변경

  // useEffect -> genre -> MainBanner 데이터 호출 (max : 10)
  // setMainBanner

  // useEffect -> genre -> SubBanner 데이터 호출 (max : 10)
  // setSubBanner

  const fetchMainBannerData = () => {
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application.json' },
      }
      fetch(`http://localhost:8080/products/${genre}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data)
          setMainBannerData(data.data)
        })
    }, [genre])
  }

  fetchMainBannerData()

  return (
    <div className='main'>
      <div className='content'>
        <MainBanner mainBannerData={mainBannerData} />
        <SubBanner subBannerData={subBannerData} />
        <EventComponent />
      </div>
    </div>
  )
}
