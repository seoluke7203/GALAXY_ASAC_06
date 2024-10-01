import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import emblaCarouselAutoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { useLocation } from 'react-router'
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
  {
    id: 4,
    title: 'TEST4',
    genre: '뮤지컬',
    content: '내용4',
    link: '/ticketing',
    src: '../src/assets/concertTestImg.gif',
  },
  {
    id: 5,
    title: 'TEST5',
    genre: '뮤지컬',
    content: '내용5',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
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
  {
    id: 5,
    title: 'TEST5',
    genre: '뮤지컬',
    content: '내용5',
    link: '/ticketing',
    src: '../src/assets/musicalTestImg.gif',
  },
  {
    id: 6,
    title: 'TEST6',
    genre: '뮤지컬',
    content: '내용6',
    link: '/ticketing',
    src: '../src/assets/concertTestImg.gif',
  },
]

const MainBanner = ({ mainBannerData }) => {
  return (
    <div className='flex flex-row justify-center items-center mt-10'>
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
        className='max-w-7xl h-full box-border'
      >
        <CarouselContent className='w-full'>
          {mainBannerData
            // .filter((content) => genre.genre === content.genre)
            .map((content) => (
              <CarouselItem key={content.id} className='basis-1/4'>
                <Link to={`${content.link}/:${content.id}`}>
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
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const SubBanner = ({ subBannerData }) => {
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
          <CarouselContent className='w-full'>
            {subBannerData
              // .filter((content) => genre.genre === content.genre)
              .map((content) => (
                <CarouselItem key={content.id} className='basis-1/6'>
                  <Link className='flex flex-col' to={`${content.link}/:${content.id}`}>
                    <img
                      src={content.src}
                      alt='testImg'
                      className='rounded-xl border  border-black border-opacity-10'
                    />
                    <ul className='pt-4 px-1 text-base font-bold'>
                      <li className='text-fuchsia-600'>10.02(수) 11:00</li>
                      <li className='overflow-hidden text-ellipsis mt-1'>{content.title}</li>
                      <li className='mt-1 text-xs text-gray-400 font-thin'>
                        {content.content}테스트 입니다. 테스트 입니다. 테스트 입니다.{' '}
                      </li>
                    </ul>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const location = useLocation()
  const { genre } = location.state || { genre: '뮤지컬' }
  const [mainBannerData, setMainBannerData] = useState(mainBannerContents) // 더미 데이터 세팅. 추후 변경
  const [subBannerData, setSubBannerData] = useState(subBannerContents) // 더미 데이터 세팅. 추후 변경

  // useEffect -> MainBanner 데이터 호출 (max : 10)
  // setMainBanner

  // useEffect -> SubBanner 데이터 호출 (max : 10)
  // setSubBanner

  return (
    <div className='flex flex-col items-center mb-24 px-[50px] min-h-[1000px] min-w-[1152px]'>
      <MainBanner mainBannerData={mainBannerData} />
      <SubBanner subBannerData={subBannerData} />
      {/* <EventBanner/> */}
    </div>
  )
}
