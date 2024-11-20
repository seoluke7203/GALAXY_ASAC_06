import React, { useEffect, useState } from 'react'
import InfoMain from '../../components/performaceInfo/infoMain'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { useParams } from 'react-router'
import DateSelectUI from '@/components/TicketingComponents/DateSelectUI'
import NonDateSelectUI from '@/components/TicketingComponents/NonDateSelectUI'

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
    src: '../src/assets/images/musicalTestImg.gif',
  })
  const [ticketType, setTicketType] = useState(productData.type)

  // useEffect -> param.productId -> InfoMain, 관람 후기 데이터 호출
  // setProductData

  // setReview --pending

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application.json' },
    }
    fetch(`http://localhost:8080/ticketing/${params.productId}`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setProductData(result.data)
      })
  }, [])

  return (
    <div className='main'>
      <div className='content flex justify-between items-start'>
        <div>
          <InfoMain productData={productData} />
          <Tabs className='pl-10' defaultValue='performaceInfo'>
            <TabsList>
              <TabsTrigger value='performaceInfo'>공연정보</TabsTrigger>
              <TabsTrigger value='review'>관람후기</TabsTrigger>
              <TabsTrigger value='qna'>Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value='performaceInfo'>
              <PosterInfo src={productData.posterDetail} />
            </TabsContent>
            <TabsContent value='review'>관람후기 게시판</TabsContent>
            <TabsContent value='qna'> qna </TabsContent>
          </Tabs>
        </div>
        <div className='mx-10 sticky top-48'>
          {ticketType === '0' ? (
            <NonDateSelectUI productData={productData} />
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
