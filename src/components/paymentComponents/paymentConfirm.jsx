import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function PaymentConfirmUI({ ticketingData }) {
  const navigate = useNavigate()
  const countUpdate = ticketingData.countUpdate
  const totalPrice = ticketingData.totalPrice

  const nameChanger = (name) => {
    if (name === 'adult') {
      return '성인'
    } else if (name === 'elderly') {
      return '고령자'
    } else if (name === 'youth') {
      return '청소년'
    } else if (name === 'infant') {
      return '유아'
    }
  }

  const valueChanger = (key, value) => {
    // setCount((prev) => prev + 1)
    if (key === 'adult') {
      return value * 130000
    } else if (key === 'elderly') {
      return value * 120000
    } else if (key === 'youth') {
      return value * 120000
    } else if (key === 'infant') {
      return value * 50000
    } else {
      return 0
    }
  }

  console.log(ticketingData)

  const submitHandler = () => {
    // 결제 요청 api 호출

    // 1. 데이터 insert, 예매번호만 response --> 예매번호 + ticketingData 전달.
    // 2.                예매정보 response --> response 데이터 전달
    navigate('/paymentCompleted', { state: { ticketingData } })
  }

  return (
    <div className='flex flex-col  w-3/12 border m-10 p-3 rounded-lg bg-gray-600 text-white'>
      <div>
        <h2 className='font-bold text-2xl my-3 text-left'> 결재 금액</h2>
      </div>
      <div>
        <div className='flex flex-col w-full p-3 rounded-lg bg-gray-400 gap-4'>
          <div>
            {Object.entries(countUpdate).map(([key, value], index) => (
              <div key={index} className='flex justify-between border-b-2 my-4 py-1 border-white'>
                <div>
                  {nameChanger(key)} {value} 명{' '}
                </div>
                <div>{valueChanger(key, value)}원</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex justify-between w-full rounded-lg text-xl py-1 p-3 bg-gray-400'>
          <div>금액: </div>
          <div>{totalPrice}원</div>
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-20'>
          <h2>총 결제 금액: </h2>
          <h2 className='font-bold'>{totalPrice}원</h2>
        </div>
      </div>
      <div className='flex'>
        <button className='w-full bg-gray-500 text-white rounded-lg p-3 my-3 mr-2'>취소하기</button>
        <button
          onClick={() => submitHandler()}
          className='submit w-full bg-blue-500 text-white rounded-lg p-3 my-3'
        >
          결제하기
        </button>
      </div>
    </div>
  )
}
