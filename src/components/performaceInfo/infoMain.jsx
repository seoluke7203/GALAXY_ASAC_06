import useEventInfo from '@/custom/useEventInfo'
import { useState } from 'react'

const infoMain = ({ productData }) => {
  const { eventTitle, eventRank, posterSrc, eventDetails, ticketInfo } = useEventInfo()
  

  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold text-left'>{productData?.title}</h2>
      <h3 className='text-gray-500 text-left'>{productData?.rank}</h3>
      <div className='flex mt-8 space-x-8'>
        <Poster src={productData.posterSrc} />
        <EventDetails detail={productData}/>
      </div>
    </div>
  )
}

const Poster = ({ src }) => (
  <div className='poster'>
    {console.log(src)}
    <img src={src} alt='뮤지컬 포스터' className='w-full h-auto rounded-md shadow-lg' />
  </div>
)

const EventDetails = ({detail}) => (
  <div className='info'>
    {console.log(detail)}
    <p className='py-2 font-semibold text-left p-6'>{`장소 : ${detail.place}`}</p>
    <p className='py-2 font-semibold text-left p-6'>{`공연기간 : ${detail.startDate} ~ ${detail.endDate}`}</p>
    <p className='py-2 font-semibold text-left p-6'>{`공연시간 : ${detail.runningTime}분`}</p>
    <p className='py-2 font-semibold text-left p-6'>{`관람연령 : 전체연령 `}</p>
    <p className='py-2 font-semibold text-left p-6'>{`가격 :  ${detail.price}원`}</p>
  </div>
)

export default infoMain
