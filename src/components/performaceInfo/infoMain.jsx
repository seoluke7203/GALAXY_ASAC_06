import { useState } from 'react'

const infoMain = ({ productData }) => {
  // const { eventTitle, eventRank, posterSrc, eventDetails, ticketInfo } = useEventInfo()
  

  return (
    <div className='mx-auto w-full pb-10 pl-10'>
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
    {/* {console.log(src)} */}
    <img src={src} alt='뮤지컬 포스터' className='w-54 h-72 rounded-md shadow-lg' />
  </div>
)

const EventDetails = ({detail}) => (
  <div className='info pl-10'>
    <ul className='inline-grid'>
      <li className='inline-flex pb-3'>
        <strong className='w-24 text-left'>장소</strong>
        <p className='font-semibold'>{`${detail.place}`}</p>
      </li>
      <li className='inline-flex pb-3'>
        <strong className='w-24 text-left'>공연기간</strong>
        <p className='font-semibold'>{`${detail.startDate} ~ ${detail.endDate}`}</p>
      </li>
      <li className='inline-flex pb-3'>
        <strong className='w-24 text-left'>공연시간</strong>
        <p className='font-semibold'>{`${detail.runningTime}분`}</p>
      </li>
      <li className='inline-flex pb-3'>
        <strong className='w-24 text-left'>관람연령</strong>
        <p className='font-semibold'>{`전체연령`}</p>
      </li>
      <li className='inline-flex pb-3'>
        <strong className='w-24 text-left'>가격</strong>
        <div className='text-left'>
          <ul className='inline-grid'>
            <li className='inline-flex pb-1'>
              <strong className='w-16'>성인</strong>
              <p className='font-semibold'>{`${detail.price}원`}</p>
            </li>
            <li className='inline-flex pb-1'>
              <strong className='w-16'>경로</strong>
              <p className='font-semibold'>{detail.price - (detail.price * 0.1)}원</p>
            </li>
            <li className='inline-flex pb-1'>
              <strong className='w-16'>청소년</strong>
              <p className='font-semibold'>{detail.price - (detail.price * 0.2)}원</p>
            </li>
            <li className='inline-flex pb-1'>
              <strong className='w-16'>유아</strong>
              <p className='font-semibold'>{detail.price - (detail.price * 0.5)}원</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div> 
)

export default infoMain
