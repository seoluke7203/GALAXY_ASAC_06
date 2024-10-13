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

  console.log(productData?.details)
  
  console.log(eventDetails)
  


  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold text-left'>{productData?.title}</h2>
      <h3 className='text-gray-500 text-left'>{productData?.rank}</h3>
      <div className='flex mt-8 space-x-8'>
        <Poster src={productData?.src} />
        <EventDetails details={eventDetails} ticketInfo={ticketInfo} />
      </div>
    </div>
  )
}

const Poster = ({ src }) => (
  <div className='poster'>
    <img src={src} alt='뮤지컬 포스터' className='w-full h-auto rounded-md shadow-lg' />
  </div>
)

const EventDetails = ({ details, ticketInfo }) => (
  <div className='info'>
    <table>
      {details.map((detail, index) => (
        <tr key={index}>
          <td className='py-2 font-semibold text-left p-6'>{detail.label}</td>
          <td className='py-2 text-left'>{detail.value}</td>
        </tr>
      ))}
      <tr>
        <td className='py-2 font-semibold text-left p-6'>가격</td>
        <td>
          <ul className='py-2 text-left'>
            {ticketInfo.map((ticket, index) => (
              <li key={index}>{ticket}</li>
            ))}
          </ul>
        </td>
      </tr>
    </table>
  </div>
)

export default infoMain
