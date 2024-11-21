import EventComponent from '@/components/LandingComponent/EventBanner'
import MainBanner from '@/components/LandingComponent/MainBanner'
import SubBanner from '@/components/LandingComponent/SubBanner'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

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
  const [subBannerData, setSubBannerData] = useState([]) // 더미 데이터 세팅. 추후 변경

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
      fetch(`http://localhost:8080/api/products/main/${genre}`, requestOptions)
        .then((res) => res.json())
        .then((result) => {
          setMainBannerData(result.data)
        })
    }, [genre])
  }

  const fetchSubBannerData = () => {
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application.json' },
      }
      fetch(`http://localhost:8080/api/products/sub/${genre}`, requestOptions)
        .then((res) => res.json())
        .then((result) => {
          setSubBannerData(result.data)
        })
    }, [genre])
  }

  fetchMainBannerData()
  fetchSubBannerData()

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
