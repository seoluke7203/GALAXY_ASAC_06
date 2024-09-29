import React from 'react'
import InfoMain from '../../components/ui/performaceInfo/infoMain'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import useEventInfo from '../../custom/useEventInfo'


export default function TicketingPage() {
  const posterInfo = useEventInfo();
  return (
    <div>
      <InfoMain/>
      <Tabs defaultValue="performaceInfo" className='bg-white'>
        <TabsList>
          <TabsTrigger value="performaceInfo" >공연정보</TabsTrigger>
          <TabsTrigger value="review">관람후기</TabsTrigger>
          <TabsTrigger value="qna">Q&A</TabsTrigger>
        </TabsList>
        <TabsContent value="performaceInfo"> <PosterInfo src={posterInfo}/> </TabsContent>
        <TabsContent value="review"> 관람후기 게시판 </TabsContent>
        <TabsContent value="qna"> qna </TabsContent>
      </Tabs>

    </div>
  )
}

const PosterInfo = ({ src }) => (
  <div className='posterinfo'>
    <img src={src} />
  </div>
)
