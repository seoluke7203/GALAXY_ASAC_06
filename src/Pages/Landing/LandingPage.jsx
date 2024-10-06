import EventComponent from '@/components/Layout/EventBanner'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import emblaCarouselAutoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const mainBannerContents = [
  {
    id: 1,
    title: 'TEST',
    genre: '뮤지컬',
    content: '내용1',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
  },
  {
    id: 2,
    title: 'TEST2',
    genre: '뮤지컬',
    content: '내용2',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
  },

  {
    id: 3,
    title: 'TEST3',
    genre: '뮤지컬',
    content: '내용3',
    link: '/ticketing',
    src: '../src/assets/concertTestImg.gif',
  },
]

const subBannerContents = [
  {
    id: 1,
    title: 'TEST',
    genre: '뮤지컬',
    content: '내용1',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
  },
  {
    id: 2,
    title: 'TEST2',
    genre: '뮤지컬',
    content: '내용2',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
  },

  {
    id: 3,
    title: 'TEST3',
    genre: '뮤지컬',
    content: '내용3',
    link: '/ticketing',
    src: '../src/assets/concertTestImg.gif',
  },
  {
    id: 4,
    title: 'TEST4',
    genre: '뮤지컬',
    content: '내용4',
    link: '/ticketing',
    src: '../src/assets/concertTestImg.gif',
  },
]

const Dummy = ({ type, neededAmount }) => {
  const bannerType = { main: 'basis-1/4', sub: 'basis-1/6' }

  const dummyItems = []

  for (let i = 0; i < neededAmount; i++) {
    dummyItems.push(
      <CarouselItem className={bannerType[type]}>
        <img
          src='../src/assets/testImg.png'
          alt='dummy'
          className='w-full rounded-xl border  border-black border-opacity-10'
        />
        <p className='text-base font-bold pt-5'>데이터 준비중 입니다.</p>
      </CarouselItem>,
    )
  }

  return <>{dummyItems}</>
}

const MainBanner = ({ mainBannerData }) => {
  const amoutNeedDummy = Math.max(0, 4 - mainBannerData.length)

  return (
    <div className='flex flex-row justify-center items-center'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          emblaCarouselAutoplay({
            delay: 3000,
          }),
        ]}
        className='h-full box-border'
      >
        <CarouselContent className='w-full text-center'>
          {mainBannerData
            // .filter((content) => genre.genre === content.genre)
            .map((content) => (
              <CarouselItem key={content.id} className='basis-1/4'>
                <Link to={`${content.link}/${content.id}`}>
                  <img
                    src={content.src}
                    alt='testImg'
                    className='rounded-xl border  border-black border-opacity-10'
                  />
                  <ul className='flex flex-col items-start pt-5 px-1'>
                    <li className='text-lg font-bold'>{content.title}</li>
                    <li className='text-sm pt-2'>place</li>
                    <li className='text-xs'>2000.00.00 - 2000.00.00</li>
                  </ul>
                </Link>
              </CarouselItem>
            ))}
          <Dummy type='main' neededAmount={amoutNeedDummy} />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const SubBanner = ({ subBannerData }) => {
  const amoutNeedDummy = Math.max(0, 6 - subBannerData.length)

  return (
    <div className='flex flex-col pt-28 items-center'>
      <h2 className='text-3xl font-bold underline'>SubBanner</h2>
      <div className='flex flex-row justify-center items-center mt-10'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='max-w-7xl h-full box-border'
        >
          <CarouselContent className='w-full text-center'>
            {subBannerData
              // .filter((content) => genre.genre === content.genre)
              .map((content) => (
                <CarouselItem key={content.id} className='basis-1/6'>
                  <Link className='flex flex-col' to={`${content.link}/${content.id}`}>
                    <img
                      src={content.src}
                      alt='testImg'
                      className='rounded-xl border  border-black border-opacity-10'
                    />
                    <ul className='pt-4 px-1 text-left text-base font-bold'>
                      <li className='text-fuchsia-600'>10.02(수) 11:00</li>
                      <li className='overflow-hidden text-ellipsis mt-1'>{content.title}</li>
                      <li className='mt-1 text-xs text-gray-400 font-thin'>
                        {content.content}테스트 입니다. 테스트 입니다. 테스트 입니다.{' '}
                      </li>
                    </ul>
                  </Link>
                </CarouselItem>
              ))}
            <Dummy type='sub' neededAmount={amoutNeedDummy} />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  // const location = useLocation()
  // const { genre } = location.state || { genre: '뮤지컬' }

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

  // const check = genreList.findIndex(data => data.link === genre)
  const check = genreList.find((item) => item.link === genre)
  if (!check) {
    navigate('/')
  }

  const [mainBannerData, setMainBannerData] = useState(mainBannerContents) // 더미 데이터 세팅. 추후 변경
  const [subBannerData, setSubBannerData] = useState(subBannerContents) // 더미 데이터 세팅. 추후 변경

  // useEffect -> genre -> MainBanner 데이터 호출 (max : 10)
  // setMainBanner

  // useEffect -> genre -> SubBanner 데이터 호출 (max : 10)
  // setSubBanner

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
