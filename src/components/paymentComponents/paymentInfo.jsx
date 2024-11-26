import DiscountTab from '@/components/paymentComponents/discountTabs'
import { useState } from 'react'
import { get } from 'react-hook-form'

const PaymentInfo = (ticketingData) => {

  console.log(ticketingData)
  const t = ticketingData.ticketingData
  const year = t.schedule_Date.getFullYear() 
  const month = t.schedule_Date.getMonth() + 1
  const date = t.schedule_Date.getDate() 
  const getday = t.schedule_Date.getDay() 
  const days = ["일","월","화","수","목","금","토"]

  const productDate = year + "." + month + "." + date + "." + days[getday]
  const productTime = t.schedule_Time
  const peopleArray = t.countUpdate

  const posterSrc = t.productData.posterSrc
  
  const eventDetails = [
    { label: '공연날짜', value: productDate },
    { label: '공연시간', value: productTime },
    { label: '공연정보', value: "location" },
    { label: '좌석정보', value: "seatInfo" },
    
  ]

  return (
    <div className='container mx-auto px-4 p-8 pl-12'>  
      <h2 className='text-2xl font-bold text-left mb-4'>결제하기</h2>
      <hr className='mb-4 border-t-2 border-black' />
      <div className='flex mt-8 mb-8 space-x-8 '>
        <Poster src={posterSrc} />
        <EventDetails details={eventDetails} />
      </div>
      <hr className='mb-4 border-t-2 border-black' />
      <DiscountTab />
    </div>
  )
}

const Poster = ({ src }) => (
  <div className='poster'>
    <img src={src} alt='뮤지컬 포스터' className='w-54 h-72 rounded-md shadow-lg' />
  </div>
)

const EventDetail = ({ detail }) => {
  return (
    <tr>
      <td className='py-2 font-semibold text-left p-6'>{detail.label}</td>
      <td className='py-2 text-left'>{detail.value}</td>
    </tr>
  )
}

const EventDetails = ({ details }) => (
  <div className='info'>
    <table>
      {details.map((detail, index) => (
        <EventDetail key={index} detail={detail} />
      ))}
    </table>
  </div>
)

export default PaymentInfo
