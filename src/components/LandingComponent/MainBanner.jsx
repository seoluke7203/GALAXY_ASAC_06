import DummyComponent from '@/components/LandingComponent/DummyComponent'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import emblaCarouselAutoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

const MainBanner = ({ mainBannerData }) => {
  const amountNeedDummy = Math.max(0, 4 - mainBannerData.length)

  return (
    <div className='flex flex-row justify-center items-center'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          emblaCarouselAutoplay({
            delay: 3000,
          }),
        ]}
        className='h-full box-border'
      >
        <CarouselContent className='w-full text-center'>
          {mainBannerData
            // .filter((content) => genre.genre === content.genre)
            .map((content, index) => (
              <CarouselItem key={index} className='basis-1/4'>
                <Link to={`/ticketing/${content.productId}`}>
                  <img
                    src={content.productSrc}
                    alt='testImg'
                    className='rounded-xl border  border-black border-opacity-10 h-80 w-56'
                  />
                  <ul className='flex flex-col items-start pt-5 px-1'>
                    <li className='text-lg font-bold'>{content.title}</li>
                    <li className='text-sm pt-2'>{content.place}</li>
                    <li className='text-xs'>
                      {content.startDate} - {content.endDate}
                    </li>
                  </ul>
                </Link>
              </CarouselItem>
            ))}
          <DummyComponent type='main' neededAmount={amountNeedDummy} />
        </CarouselContent>
        <CarouselPrevious className='p-0' />
        <CarouselNext className='p-0' />
      </Carousel>
    </div>
  )
}

export default MainBanner
