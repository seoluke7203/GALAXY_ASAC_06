import { CarouselItem } from '@/components/ui/carousel'

const DummyComponent = ({ type, neededAmount }) => {
  const bannerType = { main: 'basis-1/4', sub: 'basis-1/6' }

  const dummyItems = []

  for (let i = 0; i < neededAmount; i++) {
    dummyItems.push(
      <CarouselItem key={i} className={bannerType[type]}>
        <img
          src='../src/assets/testImg.png'
          alt='dummy'
          className='w-full rounded-xl border  border-black border-opacity-10'
        />
        <p className='text-base font-bold pt-5'>데이터 준비중 입니다.</p>
      </CarouselItem>,
    )
  }

  return <>{dummyItems}</>
}

export default DummyComponent
