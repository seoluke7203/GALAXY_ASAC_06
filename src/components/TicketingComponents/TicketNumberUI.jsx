import TicketNumberSelector from '@/components/TicketingComponents/TicketNumberSelector'
import { useIsLoginState } from '@/context/IsLoginContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TicketNumberUI = ({ ticketingData }) => {
  const isLogin = useIsLoginState()

  const ADULT_PRICE = 130000
  const ELDERLY_PRICE = 120000
  const YOUTH_PRICE = 120000
  const INFANT_PRICE = 50000

  const [countUpdate, setCountUpdate] = useState({
    adult: 0,
    elderly: 0,
    youth: 0,
    infant: 0,
  })

  const navigate = useNavigate()

  const handleCountChange = (category, newCount) => {
    setCountUpdate((prev) => ({
      ...prev,
      [category]: newCount,
    }))
  }

  const TotalPrice = () => {
    const Total =
      countUpdate.adult * ADULT_PRICE +
      countUpdate.elderly * ELDERLY_PRICE +
      countUpdate.youth * YOUTH_PRICE +
      countUpdate.infant * INFANT_PRICE

    // 클릭 시 결제 페이지로 이동

    return Total
  }

  const handleNavigatetoPayment = () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.\n로그인 페이지로 이동합니다.')
      navigate('/login')
      return
    }

    const Total = TotalPrice()

    ticketingData.countUpdate = countUpdate
    ticketingData.totalPrice = Total
    ticketingData.countUpdate = countUpdate

    let nav = '/payment' // 날짜 x -> 바로 결제 페이지

    if (ticketingData.productData.productType === 'SCHEDULE') {
      nav = '/seatSelect'
    }

    navigate(nav, { state: { ticketingData } })
  }

  return (
    <div className=''>
      <h2 className='text-black text-center text-2xl font-bold mb-4'>입장권</h2>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <TicketNumberSelector
            category={'성인'}
            price={ADULT_PRICE}
            onCountChange={(newCount) => handleCountChange('adult', newCount)}
          />
          <TicketNumberSelector
            category={'경로'}
            price={ELDERLY_PRICE}
            onCountChange={(newCount) => handleCountChange('elderly', newCount)}
          />
          <TicketNumberSelector
            category={'청소년'}
            price={YOUTH_PRICE}
            onCountChange={(newCount) => handleCountChange('youth', newCount)}
          />
          <TicketNumberSelector
            category={'유아'}
            price={INFANT_PRICE}
            onCountChange={(newCount) => handleCountChange('infant', newCount)}
          />
        </div>
      </div>
      <div className='p-3'>
        <h4 className='font-semibold'>합계: {TotalPrice()}원</h4>
      </div>
      <div className='submit-button'>
        <button onClick={handleNavigatetoPayment} className='bg-purple-200 w-full'>
          <h4 className='font-semibold'>확인</h4>
        </button>
      </div>
    </div>
  )
}

export default TicketNumberUI
