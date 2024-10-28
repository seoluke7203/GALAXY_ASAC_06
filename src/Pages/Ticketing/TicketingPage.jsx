import React, { useEffect, useState, useLayoutEffect } from 'react'
import InfoMain from '../../components/performaceInfo/infoMain'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import useEventInfo from '../../custom/useEventInfo'
import DateSelectUI from '@/components/TicketingComponents/DateSelect'
import { useParams } from 'react-router'
import posterSrc1 from '../../assets/poster/jesuschristPoster.jpeg'
import posterSrc2 from '../../assets/poster/aladinPoster.png'
import NonSelectTicket from '@/components/TicketingComponents/NonSelectTicket'

//async - await fetch()로 데이터 받아오기

export default function TicketingPage() {
  // const params = useParams()
  // const posterInfo = useEventInfo()
  // const [productData, setProductData] = useState(null)
  // const [eventDetails, setEventDetails] = useState(productList(1))

  // useEffect(() => {
  //   setEventDetails(productList(params.productId))
  //   setProductData(eventDetails[params.productId])
  // }, [params])

  // ----------------------------------------------------------------

  const params = useParams()
  // const posterInfo = useEventInfo()

  const [productData, setProductData] = useState({
    product_id: 1,
    title: 'TEST',
    genre: '뮤지컬',
    content: '내용1',
    place: '예술의 전당',
    type: '1',
    src: '../src/assets/musicalTestImg.gif',
  })
  const [ticketType, setTicketType] = useState(productData.type)

  // useEffect -> param.productId -> InfoMain, 관람 후기 데이터 호출
  // setProductData

  // setReview --pending

  //sample
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application.json' },
    }
    fetch('http://localhost:8080/test', requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className='main'>
      <div className='content flex justify-between items-start'>
        <div>
          <InfoMain productData={productData} />
          <Tabs defaultValue='performaceInfo'>
            <TabsList>
              <TabsTrigger value='performaceInfo'>공연정보</TabsTrigger>
              <TabsTrigger value='review'>관람후기</TabsTrigger>
              <TabsTrigger value='qna'>Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value='performaceInfo'>
              <PosterInfo src='../src/assets/jesusMainPic.jpg' />
            </TabsContent>
            <TabsContent value='review'>관람후기 게시판</TabsContent>
            <TabsContent value='qna'> qna </TabsContent>
          </Tabs>
        </div>
        <div className='mx-10 sticky top-48'>
          {ticketType === '0' ? (
            <NonSelectTicket productData={productData} />
          ) : (
            <DateSelectUI productData={productData} />
          )}
        </div>
      </div>
    </div>
  )
}

const PosterInfo = ({ src }) => (
  <div className='posterinfo'>
    <img className='w-screen' src={src} />
  </div>
)
