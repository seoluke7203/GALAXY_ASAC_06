import { Input } from '@/components/ui/input'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import LogoZone from '@/components/Layout/LogoZone'

function UserNameInput({ register, error = undefined }) {
  return (
    <>
      <div className='flex'>
        <label htmlFor='id' className='w-32 text-left border-black border-b-2 pr-4 p-1 '>
          아이디
        </label>
        <Input
          placeholder='6-20자 영문, 숫자'
          label={'UserName'}
          className='w-full bg-white border-0 rounded-none border-black border-b-2 pr-20'
          {...register('username', {
            required: { value: true, message: '아이디를 입력해주세요 ' },
            minLength: {
              value: 5,
              message: '아이디는 5자 이상이여야합니다',
            },
            maxLength: {
              value: 20,
              message: '아이디는 20자 이하이여야합니다',
            },
          })}
        />
      </div>
      <div className={clsx(error && 'error-text')}>
        {error?.type === '_type_' && '_message_'}
        {error?.message}
      </div>
    </>
  )
}

function PasswordInput({ register, error = undefined }) {
  return (
    <>
      <div>
        <div className='pw-input flex mt-10'>
          <label htmlFor='password' className='w-32 text-left border-black border-b-2 pr-4 p-1'>
            비밀번호
          </label>
          <Input
            type='password'
            label={'password'}
            className='w-full bg-white border-0 rounded-none border-black border-b-2 pr-20'
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력해주세요' },
              minLength: {
                value: 5,
                message: '비밀번호는 5자 이상이여아합니다',
              },
            })}
          />
        </div>
        <div className={clsx(error && 'error-text')}>
          {error?.type === '_type_' && '_message_'}
          {error?.message}
        </div>
      </div>
    </>
  )
}

function PasswordConfirmInput({ register, watch, error = undefined }) {
  return (
    <>
      <div>
        <div className='pw-input flex mt-10'>
          <label
            htmlFor='password-confirm'
            className='w-48 text-left border-black border-b-2 pr-3 p-1'
          >
            비밀번호 확인
          </label>
          <Input
            type='password'
            label={'passwordConfirm'}
            className='w-full bg-white border-0 rounded-none border-black border-b-2 pr-20'
            {...register('passwordConfirm', {
              required: {
                value: true,
                message: '비밀번호를 다시 한번 입력해주세요',
              },
              validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다',
            })}
          />
        </div>
        <div className={clsx(error && 'error-text')}>
          {error?.type === '_type_' && '_message_'}
          {error?.message}
        </div>
      </div>
    </>
  )
}

function EmailInput({ register, error = undefined }) {
  return (
    <>
      <div>
        <div className='id-input flex mt-10'>
          <label htmlFor='name' className='w-48 text-left border-black border-b-2 pr-4 p-1'>
            이메일
          </label>
          <Input
            className='w-full bg-white border-0 rounded-none border-black border-b-2 pr-20'
            label={'email'}
            {...register('email', {
              required: { value: true, message: '이메일을 입력해주세요' },
              pattern: {
                value: /^\S+@\S+$/i,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
        </div>
        <div className={clsx(error && 'error-text')}>
          {error?.type === '_type_' && '_message_'}
          {error?.message}
        </div>
      </div>
    </>
  )
}

function NameInput({ register, error = undefined }) {
  return (
    <>
      <div>
        <div className='id-input flex mt-10'>
          <label htmlFor='name' className='w-48 text-left border-black border-b-2 pr-4 p-1'>
            이름
          </label>
          <Input
            label={'name'}
            className='w-full bg-white border-0 rounded-none border-black border-b-2 pr-20'
            {...register('name', {
              required: { value: true, message: '이름을 입력해주세요' },
            })}
          />
        </div>
        <div className={clsx(error && 'error-text')}>
          {error?.type === '_type_' && '_message_'}
          {error?.message}
        </div>
      </div>
    </>
  )
}

function onClickConfirm(data) {
  console.log(data)
  // @TODO: 여기서 BE로 데이터를 보내면 된다
}

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className='flex flex-col items-left w-full min-w-[1152px] border-b border-solid p-5'>
        <LogoZone />
      </div>
      <div className='register-page flex flex-col'>
        <h1 className='text-3xl font-bold text-center m-16'>회원가입</h1>
        <form className='w-full max-w-lg mx-auto' onSubmit={handleSubmit(onClickConfirm)}>
          <UserNameInput register={register} error={errors?.username} />
          <PasswordInput register={register} error={errors?.password} />
          <PasswordConfirmInput register={register} watch={watch} error={errors?.passwordConfirm} />
          <NameInput register={register} error={errors?.name} />
          <EmailInput register={register} error={errors?.email} />
          <button
            type='submit'
            className='w-full mt-20 bg-black text-white rounded-md shadow-md hover:bg-gray-900'
          >
            회원가입
          </button>
        </form>
      </div>
    </>
  )
}
