import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

// const SeatSelect = ({ count = 3, title, schedule, location }) => {
const SeatSelect = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { ticketingData } = location.state

  const [selectedSeats, setSelectedSeats] = useState([])

  const productData = ticketingData.productData
  const countUpdate = ticketingData.countUpdate
  const schedule = ticketingData.schedule

  let count = 0
  Object.entries(countUpdate).forEach(([key, value]) => {
    count += value
  })

  const handleSeatSelect = (seat) => {
    if (selectedSeats.length >= count && !selectedSeats.includes(seat)) {
      alert(`최대 ${count}개의 좌석을 선택할 수 있습니다.`)
      return
    }
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        // If it is, remove it from the selected seats
        const updatedSeats = prevSelectedSeats.filter((s) => s !== seat)
        console.log('Selected Seats:', updatedSeats)
        return updatedSeats
      } else {
        // If it isn't, add it to the selected seats
        const updatedSeats = [...prevSelectedSeats, seat]
        console.log('Selected Seats:', updatedSeats)
        return updatedSeats
      }
    })
  }

  const submitHandler = () => {
    // 결제 요청 api 호출
    ticketingData.selectedSeats = selectedSeats

    navigate('/payment', { state: { ticketingData } })
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='seat-select-page flex'>
        {/* Left side contnet */}
        <div className='flex-2'>
          <div className='mb-10 text-left'>
            <h1>좌석 선택</h1>
          </div>
          <div>
            <h2 className='font-bold text-center'>
              &lt;{productData.title !== '' ? productData.title : 'Title Not found'}&gt; :
              {schedule !== '' ? schedule : 'Schedule not found'} -{' '}
              {productData.place !== '' ? productData.place : 'Location not found'}
            </h2>
          </div>
          <div className='p-10 font-bold'>
            <hr style={{ border: 'none', borderTop: '5px solid black' }} />
            <h3>스테이지</h3>
          </div>
          <div className='grid grid-cols-4 gap-4 text-center text-3xl'>
            <button
              value='A'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='h-48 w-48 border rounded-lg bg-green-500 hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 A
            </button>
            <button
              value='B'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='bg-yellow-400 border rounded-lg col-span-2 hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 B
            </button>
            <button
              value='C'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='bg-green-500 border rounded-lg hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 C
            </button>
            <button
              value='D'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='h-48 w-48 border rounded-lg bg-orange-400 hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 D
            </button>
            <button
              value='E'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='bg-blue-300 border rounded-lg col-span-2 hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 E
            </button>
            <button
              value='F'
              onClick={(e) => {
                handleSeatSelect(e.currentTarget.value)
              }}
              className='bg-orange-400 border rounded-lg hover:shadow-xl hover:shadow-gray-400 flex items-center justify-center'
            >
              좌석 F
            </button>
          </div>
        </div>
        {/* Right side content */}

        <div className='flex p-5 flex-col-reverse'>
          <div className='border border-red-600 w-[350px]'>
            <div className='border border-black'>
              <img src='../src/assets/galaxy_image.jpg' alt='placeholder' className='h-56 w-full' />
            </div>
            <div className='p-10'>
              <h2 className='font-bold mb-10'>선택한 좌석</h2>
              <div className='flex flex-wrap gap-2'>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('A') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  A
                </div>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('B') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  B
                </div>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('C') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  C
                </div>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('D') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  D
                </div>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('E') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  E
                </div>
                <div
                  className={`border border-gray-400 rounded-lg p-3 ${selectedSeats.includes('F') ? 'bg-gray-400' : 'bg-white'}`}
                >
                  F
                </div>
              </div>
            </div>
            <div className='p-3'>
              <div className=''>
                <h3>
                  {count - selectedSeats.length == 0
                    ? '더 이상 좌석을 선택할 수 없습니다.'
                    : `${count - selectedSeats.length}개의 좌석을 더 선택해주세요.`}
                </h3>
              </div>
            </div>
            <div className='p-10'>
              <button
                onClick={submitHandler}
                className='w-full bg-blue-500 text-white p-4 rounded-lg'
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatSelect
