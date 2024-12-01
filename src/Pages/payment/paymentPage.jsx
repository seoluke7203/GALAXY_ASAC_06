import PaymentConfirmUI from '@/components/paymentComponents/paymentConfirm'
import PaymentInfo from '@/components/paymentComponents/paymentInfo'
import { useLocation } from 'react-router'

export default function paymentPage() {
  const location = useLocation()
  const { ticketingData } = location.state

  return (
    <>
      <div className='flex'>
        <PaymentInfo ticketingData={ticketingData} />
        <PaymentConfirmUI ticketingData={ticketingData} />
      </div>
    </>
  )
}
