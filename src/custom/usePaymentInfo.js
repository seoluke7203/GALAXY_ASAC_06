import posterPicture from '../assets/images/posters/jesuschristPoster.jpeg'


const usePaymentInfo = ({
  title = '소년시절의 너',
  date = '2024.09.03(화)',
  time = '15:25 ~ 17:50',
  location = '강남/2관 - 2D(자막)',
  seatInfo = '청소년 3'
} = {}) => {
  const eventTitle = title
  const posterSrc = posterPicture
  // const eventTitle = '소년시절의 너'
  // const posterSrc = posterPicture

  const eventDetails = [
    { label: ' ', value: ' ' },
    { label: ' ', value: ' ' },
    { label: '공연날짜', value: date },
    { label: '공연시간', value: time },
    { label: '공연정보', value: location },
    { label: '좌석정보', value: seatInfo },
  ]

  return {
    eventTitle,
    posterSrc,
    eventDetails,
  }
}

export default usePaymentInfo
