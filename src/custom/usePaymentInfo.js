import posterPicture from '../assets/poster/jesuschristPoster.jpeg'

const usePaymentInfo = () => {
  const eventTitle = '소년시절의 너'
  const posterSrc = posterPicture

  const eventDetails = [
    { label: ' ', value: ' ' },
    { label: ' ', value: ' ' },
    { label: '공연날짜', value: '2024.09.03(화)' },
    { label: '공연시간', value: '15:25 ~ 17:50' },
    { label: '공연정보', value: '강남/2관 - 2D(자막)' },
    { label: '좌석정보', value: '청소년 3' },
  ]

  return {
    eventTitle,
    posterSrc,
    eventDetails,
  }
}

export default usePaymentInfo
