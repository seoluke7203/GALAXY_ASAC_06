import DummyComponent from '@/components/LandingComponent/DummyComponent'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Link } from 'react-router-dom'

const SubBanner = ({ subBannerData }) => {
  const amountNeedDummy = Math.max(0, 6 - subBannerData.length)

  return (
    <div className='flex flex-col pt-28 items-center'>
      <h2 className='text-3xl font-bold underline'>티켓오픈</h2>
      <div className='flex flex-row justify-center items-center mt-10'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='max-w-7xl h-full box-border'
        >
          <CarouselContent className='w-full text-center'>
            {subBannerData.map((content, index) => (
              <CarouselItem key={index} className='basis-1/6'>
                <Link className='flex flex-col' to={`/ticketing/${content.id}`}>
                  <img
                    src={content.productSrc}
                    alt='poster'
                    className='rounded-xl border  border-black border-opacity-10'
                  />
                  <ul className='pt-4 px-1 text-left text-base font-bold'>
                    <li className='text-fuchsia-600'>{content.releaseDate}</li>
                    <li className='overflow-hidden text-ellipsis mt-1'>{content.title}</li>
                    <li className='mt-1 text-xs text-gray-400 font-thin'>{content.content}</li>
                  </ul>
                </Link>
              </CarouselItem>
            ))}
            <DummyComponent type='sub' neededAmount={amountNeedDummy} />
          </CarouselContent>
          <CarouselPrevious className='p-0' />
          <CarouselNext className='p-0' />
        </Carousel>
      </div>
    </div>
  )
}

export default SubBanner
