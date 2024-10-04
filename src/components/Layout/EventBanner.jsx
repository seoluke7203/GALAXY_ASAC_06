import { Link } from 'react-router-dom'

const EventComponent = () => {
  return (
    <div className='my-16'>
      <h2 className='text-3xl font-bold underline'>Event</h2>
      <div className='flex gap-5 justify-center mt-10'>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/event1.png' />
        </Link>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/event2.png' />
        </Link>
        <Link to='/'>
          <img className='h-auto' src='../src/assets/event3.png' />
        </Link>
      </div>
    </div>
  )
}

export default EventComponent
