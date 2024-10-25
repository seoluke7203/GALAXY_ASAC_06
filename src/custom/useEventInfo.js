import posterPicture from '../assets/poster/jesuschristPoster.jpeg'

const useEventInfo = () => {
  const eventTitle = '2024 뮤지컬 <지저스 크라이스트 슈퍼스타>'
  const eventRank = '뮤지컬 주간 17위'
  const posterSrc = posterPicture

  const eventDetails = [
    { label: '장소', value: '광림아트센터 BBCH홀' },
    { label: '공연기간', value: '2024.11.07 ~ 2025.01.12' },
    { label: '공연시간', value: '135분 (인터미션 20분 포함)' },
    { label: '관람연령', value: '미취학아동입장불가' },
  ]

  const ticketInfo = ['VIP석 150,000원', 'R석 120,000원', 'S석 90,000원', 'A석 60,000원']

  return {
    eventTitle,
    eventRank,
    posterSrc,
    eventDetails,
    ticketInfo,
  }
}

export default useEventInfo
