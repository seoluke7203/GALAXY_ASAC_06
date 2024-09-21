import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from 'lucide-react'
import { useState } from 'react'

export default function TicketNumberSelector({ category, price, onCountChange }) {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    const newCount = count
    setCount(newCount + 1)
    onCountChange(newCount + 1)
  }

  const decrementCount = () => {
    const newCount = count
    if (newCount > 0) {
      setCount(newCount - 1)
      onCountChange(newCount - 1)
    }
  }

  return (
    <>
      <div className='grid grid-cols-2 border border-black mb-3 p-2 rounded-lg bg-purple-100'>
        <div>
          <div className='text-xs'>{category}</div>
          <div className='text-md'>{price}</div>
        </div>
        <div className='flex gap-4 mt-3 ml-6 text'>
          <div>
            <ChevronLeftCircleIcon onClick={decrementCount} />
          </div>
          <div className='-mt-1.5'>
            <div className='text-3xl'>{count}</div>
          </div>
          <div>
            <ChevronRightCircleIcon onClick={incrementCount} />
          </div>
        </div>
      </div>
    </>
  )
}
