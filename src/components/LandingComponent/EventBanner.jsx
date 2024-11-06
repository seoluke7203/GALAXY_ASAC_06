import { Link } from 'react-router-dom'

const EventComponent = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-bold underline'>이벤트</h2>
      <div className='flex gap-5 justify-center mt-10'>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/images/events/event1.png' />
        </Link>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/images/events/event2.png' />
        </Link>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/images/events/event3.png' />
        </Link>
      </div>
    </div>
  )
}

export default EventComponent
