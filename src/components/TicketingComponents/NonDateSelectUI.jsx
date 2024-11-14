import AlwayOnTicketUI from '@/components/TicketingComponents/AlwaysOnTicket'
import TicketNumberUI from '@/components/TicketingComponents/TicketNumberUI'
import { useState } from 'react'

const NonDateSelectUI = (productData) => {
  const [reservation, setReservation] = useState(true)

  const Reservation = () => {
    setReservation(false)
  }

  const ticketingData = {}

  ticketingData.productData = productData

  return (
    <div className='calendar-container border p-8 rounded-lg min-w-[342px]'>
      {reservation ? (
        <AlwayOnTicketUI Reservation={Reservation} />
      ) : (
        <TicketNumberUI ticketingData={ticketingData} />
      )}
    </div>
  )
}

export default NonDateSelectUI
