import usePaymentInfo from "@/custom/usePaymentInfo"
import DiscountTab from "@/components/paymentComponents/discountTabs"


const paymentInfo = () => {
    const { eventRank, posterSrc, eventDetails } = usePaymentInfo()
  
    return (
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-left mb-4'>결제하기</h2>
          <hr className="mb-4 border-t-2 border-black" />
        <h3 className='text-gray-500 text-left'>{eventRank}</h3>
        <div className='flex mt-8 mb-8 space-x-8 '>
          <Poster src={posterSrc} />
          <EventDetails details={eventDetails} />
        </div>
        <hr className="mb-4 border-t-2 border-black" />
        <DiscountTab/>
      </div>
    )
}


const Poster = ({ src }) => (
    <div className='poster'>
      <img src={src} alt='뮤지컬 포스터' className='w-full h-auto rounded-md shadow-lg' />
    </div>
  )
  
  const EventDetails = ({ details }) => (
    <div className='info'>
      <table>
        {details.map((detail, index) => (
          <tr key={index}>
            <td className='py-2 font-semibold text-left p-6'>{detail.label}</td>
            <td className='py-2 text-left'>{detail.value}</td>
          </tr>
        ))}
      </table>
    </div>
  )


  


export default paymentInfo;