import PaymentConfirmUI from '@/components/paymentComponents/paymentConfirm'
import PaymentInfo from '@/components/paymentComponents/paymentInfo'
import { useLocation } from 'react-router'

export default function paymentPage() {
  const location = useLocation()
  // const { Total } = location.state || { Total: 0 }
  // const { countUpdate } = location.state || { countUpdate: {} }
  const { ticketingData } = location.state

  return (
    <>
      <div className='flex'>
        <PaymentInfo />
        <PaymentConfirmUI ticketingData={ticketingData} />
      </div>
    </>
  )
}
