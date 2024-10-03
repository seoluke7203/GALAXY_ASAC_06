import React from 'react'
import InfoMain from '../../components/ui/performaceInfo/infoMain'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import useEventInfo from '../../custom/useEventInfo'
import DateSelectUI from '@/components/TicketingComponents/DateSelect'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default function TicketingPage() {
  const posterInfo = useEventInfo()
  return (
    <div className='w-full flex flex-row items-start my-10'>
      <div className='min-w-[750px] w-2/3 mx-5 '>
        <InfoMain />
        <Tabs defaultValue='performaceInfo'>
          <TabsList className=''>
            <TabsTrigger value='performaceInfo'>공연정보</TabsTrigger>
            <TabsTrigger value='review'>관람후기</TabsTrigger>
            <TabsTrigger value='qna'>Q&A</TabsTrigger>
          </TabsList>
          <TabsContent value='performaceInfo'>
            <PosterInfo src='./src/assets/jesusMainPic.jpg' />
          </TabsContent>
          <TabsContent value='review'> 관람후기 게시판 </TabsContent>
          <TabsContent value='qna'> qna </TabsContent>
        </Tabs>
      </div>
      <div className='mt-10 mx-10 sticky top-48 '>
        <DateSelectUI />
      </div>
    </div>
  )
}

const PosterInfo = ({ src }) => (
  <div className='posterinfo'>
    <img src={src} />
  </div>
)
