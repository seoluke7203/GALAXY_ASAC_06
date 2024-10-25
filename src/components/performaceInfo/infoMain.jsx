import useEventInfo from '@/custom/useEventInfo'
import { useState } from 'react'

const infoMain = ({ productData }) => {
  const { eventTitle, eventRank, posterSrc, eventDetails, ticketInfo } = useEventInfo()

  // console.log(productData)

  // title: '뮤지컬3',
  //   rank: '3위',
  //   days: '3333',
  //   time: '3333',
  //   age: '3333',
  //   price: '4444',

  

  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold text-left'>{productData?.title}</h2>
      <h3 className='text-gray-500 text-left'>{productData?.rank}</h3>
      <div className='flex mt-8 space-x-8'>
        <Poster src={productData?.src} />
        <EventDetails />
      </div>
    </div>
  )
}

const Poster = ({ src }) => (
  <div className='poster'>
    <img src={src} alt='뮤지컬 포스터' className='w-full h-auto rounded-md shadow-lg' />
  </div>
)

const EventDetails = () => (
  <div className='info'>
    <p className='py-2 font-semibold text-left p-6'>{"장소"}</p>
    <p className='py-2 font-semibold text-left p-6'>{"공연기간"}</p>
    <p className='py-2 font-semibold text-left p-6'>{"공연시간"}</p>
    <p className='py-2 font-semibold text-left p-6'>{"관람연령"}</p>
    <p className='py-2 font-semibold text-left p-6'>{"가격"}</p>
  </div>
)

export default infoMain


// { label: '장소', value: '광림아트센터 BBCH홀' },
//     { label: '공연기간', value: '2024.11.07 ~ 2025.01.12' },
//     { label: '공연시간', value: '135분 (인터미션 20분 포함)' },
//     { label: '관람연령', value: '미취학아동입장불가' },
//   ]

//   const ticketInfo = ['VIP석 150,000원', 'R석 120,000원', 'S석 90,000원', 'A석 60,000원']