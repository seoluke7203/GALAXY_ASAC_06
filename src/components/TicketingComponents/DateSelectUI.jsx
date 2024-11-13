import { Calendar } from '@/components/ui/calendar'
import React, { useState } from 'react'
import TicketNumberUI from '@/components/TicketingComponents/TicketNumberUI'

const DateSelectUI = ({ productData }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const ticketingData = {
    productData: productData,
    schedule: selectedDate + selectedTime,
  }
  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  return (
    <div className='calendar-container border p-8 rounded-lg min-w-[342px]'>
      {selectedTime === null ? (
        <>
          <h2 className='text-black text-center text-2xl font-bold mb-4'>관람일</h2>

          <div className='fancy-calendar'>
            <Calendar
              mode='single'
              className='bg-white rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl'
              value={selectedDate}
              onSelect={setSelectedDate}
              showOutsideDays={false}
              // disabled={(date) => date < new Date() || date > new Date(end_date)}
              classNames={{
                day: 'text-black bg-white rounded-full p-2',
                selected: 'bg-purple-600 text-white',
                dayDisabled: 'text-gray-400 cursor-not-allowed',
                today: 'bg-purple-200',
              }}
            />
          </div>

          {selectedDate && (
            <>
              <div className='btn-lg w-full selected-date text-white text-center mt-4 p-2 bg-purple-600 rounded-lg'>
                <h4 className='font-semibold'>선택한 날짜: {selectedDate.toLocaleDateString()}</h4>
              </div>
              <div>
                <div className='selected-date text-black text-center mt-4 p-2 rounded-lg border'>
                  <h4 className='font-semibold'>예매 가능한 시간</h4>
                  <ul>
                    <button
                      className='rounded-lg bg-white border-purple-600 m-2'
                      value='10:00'
                      onClick={(e) => handleTimeSelect(e.currentTarget.value)}
                    >
                      10:00
                    </button>
                    <button
                      className='rounded-lg bg-white border-purple-600'
                      value='11:00'
                      onClick={(e) => handleTimeSelect(e.currentTarget.value)}
                    >
                      11:00
                    </button>
                  </ul>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        // Render TicketNumberSelector when a time is selected
        <TicketNumberUI ticketingData={ticketingData} />
      )}
    </div>
  )
}

export default DateSelectUI
