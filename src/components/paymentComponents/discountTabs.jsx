import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/discountTabs'

const discountTab = () => {
    return(
    <>
    <div className='grid place-items-center'>
    <Tabs defaultValue="account" className="w-[400px] grid place-items-center">
    <TabsList className='w-96'>
        <TabsTrigger value="coupon" className='w-48'>쿠폰/기타</TabsTrigger>
        <TabsTrigger value="point" className='w-48'>포인트</TabsTrigger>
    </TabsList>
    <TabsContent value="coupon"> 쿠폰 적용 화면 </TabsContent>
    <TabsContent value="point"> 포인트 적용 화면 </TabsContent>
    </Tabs>
    </div>
    </>
    )
}

export default discountTab