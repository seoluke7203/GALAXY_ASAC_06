import { Link, useLocation } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'
import { useState } from 'react'
import { generatePdf } from '@/components/paymentComponents/downloadPdf'


const PaymentCompleted = ({ ticketingData }) => {
  const productData = ticketingData.productData
  const countUpdate = ticketingData.countUpdate
  const totalPrice = ticketingData.totalPrice

  const [qrcode, setQrcode] = useState('')

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode')
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    // let downloadLink = document.createElement('a')
    // downloadLink.href = pngUrl
    // downloadLink.download = 'qrcode.png'
    // document.body.appendChild(downloadLink)
    // downloadLink.click()
    // document.body.removeChild(downloadLink)


    // 여러명일시 .map을 통해 여러개의 pdf 생성하도록 하기
    generatePdf(pngUrl, reservationID)
  }

  const settingQrcode = () => {
    setQrcode(`www.naver.com/${qrcode}`)
  }

  let count = 0
  Object.entries(countUpdate).forEach(([key, value]) => {
    count += value
  })
  console.log(ticketingData)

  const reservationID = Math.floor(Math.random() * 100000000)

  return (
    <div className='main' onLoad={settingQrcode}>
      <div className='content'>
        <div className='flex flex-col justify-center items-center gap-5 m-10'>
          <img
            className='w-20 h-20 bg-green-400 rounded-full'
            src='../src/assets/complete_Img.png'
            alt='결제 완료'
          />
          <p className='font-black text-2xl'>회원님, 결제가 성공적으로 완료 되었습니다.</p>
        </div>

        <div className='grid grid-cols-[1fr_180px_1fr_1fr] grid-flow-row text-start items-center'>
          <div className='grid grid-cols-subgrid row-span-6 bg-slate-400'>
            <img className='h-72 w-54' src={ticketingData.productData.posterSrc} />
          </div>

          <div className='font-bold pl-10'> 예매 번호 </div>
          <div className='grid grid-rows-subgrid col-span-2 items-center text-xl font-black text-gray-500'>
            { reservationID }
          </div>

          <div className='font-bold pl-10'> 공연 일시 </div>
          <div className='text-gray-500'> 10.02(수) 00:00 ~ 00:00</div>

          <div className='grid row-span-5 h-full place-items-top ml-10'>
            <section className=''>
              <h1 className='text-primary text-4xl mb-4 font-bold'> QR 코드</h1>
              <QRCodeCanvas
                id='qrcode'
                className='border-primary border-4 rounded-xl p-3'
                value={qrcode}
              />
            </section>
          </div>

          <div className='font-bold pl-10'> 공연 장소 </div>
          <div className='text-gray-500'> {productData.place} </div>

          <div className='font-bold pl-10'> 관람 인원 </div>
          <div className='text-gray-500'> {count} 명 </div>

          <div className='font-bold pl-10'> 좌석 </div>
          <div className='text-gray-500'> [X,Y,Z] </div>

          <div className='grid grid-rows-subgrid col-span-2 mx-12 mt-12 mb-5'>
            <button className='bg-gray-300' onClick={downloadQRCode}>
              {' '}
              QR 다운로드{' '}
            </button>
          </div>
        </div>

        <div className='flex flex-row justify-end border-t-2 mt-10 gap-5 text-xl font-bold pr-5 pt-5'>
          <div>총 결제 금액 </div>
          <div> {totalPrice} 원 </div>
        </div>

        <div className='text-left my-10 text-sm font-bold space-y-1'>
          <ul className='list-disc text-red-700 marker:text-black space-y-1'>
            <li>온라인 예매 내역 취소는 상영 시작 20분 전까지 올라인에서 가능합니다.</li>
            <li>상영시작 20분 전이후 부터는 영화관 현장에서만 취소 가능합니다.</li>
            <li>
              무대인사, 스페셜상영회, GV, 라이브부잉 등 특별 상영 회차의 예매 취소는 상영 전일 23시
              59분 59초까지만 취소 가능합니다.
            </li>
            <li>
              포토카드는 구매일로부터 30일까지 출력할 수 있습니다. (단, 출력기간 내 미출력시 구매
              취소 및 환불됩니다.)
            </li>
          </ul>

          <ul className='list-disc space-y-1'>
            <li>적립 예정 포인트는 영화 관람 다음날 적립됩니다.</li>
            <li>예고편 상영 등 사정에 의해 본 영화 시작이 10여분 정도 차이날 수 있습니다.</li>
            <li>
              개인정보 고호 정책에 따라 주민번호로 예매 치켓을 찾을 수 없습니다. 꼭 예매번호를
              확인해 주세요.
            </li>
            <li>
              스토어에서 구매한 상품은 마이페이지 &gt; 예매/구매 내역에서 확인 및 사용할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div className='flex flex-row m-20 justify-center gap-40'>
          <Link to='/'>
            <button className='px-10 border-gray-300 bg-white font-black'>마이 페이지</button>
          </Link>
          <Link to='/'>
            <button className='px-10 border-gray-300 bg-rose-500 from-neutral-50 font-black text-white'>
              홈으로 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PaymentCompeletedPage() {
  const location = useLocation()
  // const { total } = location.state || { Total: 0 }
  // const { count } = location.state || { count: 0 }
  const { ticketingData } = location.state
  console.log(ticketingData)

  return <PaymentCompleted ticketingData={ticketingData} />
}
