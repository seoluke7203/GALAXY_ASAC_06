import { Checkbox } from '@/components/ui/checkbox'

export default function RegisterPage() {
  return (
    <div className='register-page flex flex-col'>
      <h1 className='text-3xl font-bold text-center m-16'>회원가입</h1>
      <form className='w-full max-w-lg mx-auto'>
        <div className='id-input flex'>
          <label htmlFor='id' className='w-32 text-left border-black border-b-2 pr-4 p-3'>
            아이디
          </label>
          <input
            type='text'
            placeholder='6-20자 영문, 숫자'
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>
        <div className='pw-input flex mt-5'>
          <label htmlFor='password' className='w-32 text-left border-black border-b-2 pr-4 p-3'>
            비밀번호
          </label>
          <input
            type='password'
            placeholder='8~12자 영문, 숫자, 특수문자'
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>
        <div className='pw-input flex mt-5'>
          <label
            htmlFor='password-confirm'
            className='w-48 text-left border-black border-b-2 pr-3 p-3'
          >
            비밀번호 확인
          </label>
          <input
            type='password'
            placeholder='6-20자 영문, 숫자, 특수문자'
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>
        <div className='id-input flex mt-5'>
          <label htmlFor='name' className='w-48 text-left border-black border-b-2 pr-4 p-3'>
            이름
          </label>
          <input
            type='text'
            placeholder=''
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>
        <div className='id-input flex mt-5'>
          <label htmlFor='email' className='w-32 text-left border-black border-b-2 pr-4 p-3'>
            이메일
          </label>
          <input
            type='text'
            placeholder=''
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>
        <div className='id-input flex mt-5'>
          <label htmlFor='phone' className='w-32 text-left border-black border-b-2 pr-4 p-3'>
            휴대폰
          </label>
          <input
            type='text'
            placeholder='010 1234 5678'
            className='w-full bg-white border-b-2 pr-20 border-black'
          />
        </div>

        <div className='flex justify-center mt-10'>
          <button
            type='submit'
            className='w-full  bg-black text-white rounded-md shadow-md hover:bg-gray-900'
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  )
}
