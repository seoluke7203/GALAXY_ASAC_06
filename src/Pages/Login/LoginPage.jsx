import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'
import LogoZone from '@/components/Layout/LogoZone'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'


function UsernameInput({register, error = undefined}){
  return (
    <>
      <div className='flex mt-7'>
        <label htmlFor='id' className='basis-2/5 mt-1'>
          아이디
        </label>
        <Input
          placeholder=''
          label={'UserName'}
          className='w-full'
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

function PasswordInput({register, error = undefined}){
  return (
    <>
      <div>
        <div className='flex mt-3 mb-5'>
          <label htmlFor='password' className='basis-2/5 mt-1'>
            비밀번호
          </label>
          <Input
            type='password'
            label={'password'}
            className='w-full'
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력해주세요' },
              // 이곳에 비밀번호 틀렸을때 나오는 에러 메세지를 넣어주세요
              // minLength: {
              //   value: 5,
              //   message: '비밀번호는 5자 이상이여아합니다',
              // },
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

function onClickConfirm(data){
  console.log(data)
  // 로그인 로직을 작성해주세요
}

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className='flex flex-col items-left w-full min-w-[1152px] border-b border-solid p-5 mb-10'>
        <LogoZone />
      </div>
      <div className='login-page flex flex-col w-96 m-auto'>
        <img src='../src/assets/galaxy_image.jpg' alt='logo' className='w-full' />
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(onClickConfirm)}>
          <UsernameInput register={register} error={errors?.username} />
          <PasswordInput register={register} error={errors?.password} />
          <Button type="submit" className='mt-3 w-full'>
            로그인
          </Button>
        </form>

        <div className='mt-3 text-center'>
          <a href='/register'>회원가입 | </a>
          <a href='#' onClick={() => alert("준비중입니다")}>비밀번호 찾기 | </a>
          <a href='#' onClick={() => alert("준비중입니다")}>아이디 찾기</a>
        </div>

        <div className='mt-10 flex text-center gap-10 justify-center pb-10'>
          <a href='#'>
            <img src='../src/assets/btnW_icon_circle.png' alt='naver_login' className='w-20' />
          </a>
          <a href='#'>
            <img src='../src/assets/Kakao.png' alt='naver_login' className='w-20' />
          </a>
          <a href='#'>
            <img src='../src/assets/Google.png' alt='naver_login' className='w-20' />
          </a>
        </div>
      </div>
    </>
  )
}
