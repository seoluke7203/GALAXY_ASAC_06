import { Input } from '@/components/ui/input'

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  )
}

const SearchZone = () => {
  return (
    <div className='items-start relative max-w-md'>
      <Input
        type='text'
        placeholder='Search...'
        className='rounded-full h-12 text-base border pl-5 pr-4 py-2 md:min-w-[450px]'
      />
      <div className='absolute inset-y-0 right-5 flex items-center'>
        <SearchIcon className='w-5 h-5 text-muted-foreground' />
      </div>
    </div>
  )
}

export default SearchZone
