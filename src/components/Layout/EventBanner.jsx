import { Link } from "react-router-dom"

const EventComponent = () => {
    return (
      <div className='flex justify-center mb-10'>
        <Link to ='/'>
        <img className='w-[380px] h-auto m-3' src='../src/assets/event1.png'/>
        </Link>
        <Link to ='/'>
        <img className='w-[380px] h-auto m-3' src='../src/assets/event2.png'/>
        </Link>
        <Link to ='/'>
        <img className='w-[380px] h-auto m-3' src='../src/assets/event3.png'/>
        </Link>
      </div>
    )
  }
  
  export default EventComponent
  