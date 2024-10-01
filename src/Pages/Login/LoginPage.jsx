import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRef, useState } from 'react'

function PasswordInput({ validation: { ref, validate } }) {
  const [valid, setValid] = useState({
    minimum: true,
    required: true,
  })

  function changeMode(e) {
    if (ref.current.type === 'password') {
      ref.current.type = 'text'
      e.currentTarget.innerText = '🔓'
    } else if (ref.current.type === 'text') {
      ref.current.type = 'password'
      e.currentTarget.innerText = '🔒'
    }
  }
  return (
    <>
      <div className='flex'>
        <Input
          ref={ref}
          type='password'
          placeholder='비밀번호'
          onChange={(e) => {
            const validated = validate(e.currentTarget.value)
            setValid(validated)
          }}
        />
        <Button onClick={changeMode}>🔒</Button>
      </div>
      <div>
        {valid.minimum || <div style={{ color: 'red' }}>비밀번호는 8자 이상이어야 합니다.</div>}
        {valid.required || <div style={{ color: 'red' }}>비밀번호는 필수 입력 사항입니다.</div>}
      </div>
    </>
  )
}

function UsernameInput({ validation: { ref, validate } }) {
  return (
    <div>
      <Input placeholder='아이디' />
    </div>
  )
}

export default function LoginPage() {
  const validation = {
    id: { ref: useRef(null), validate: (input) => true },
    password: {
      ref: useRef(null),
      validate: (input) => {
        return {
          minimum: input.length >= 8,
          required: input.length > 0,
        }
      },
    },
  }

  function login() {
    const password = validation.password.ref.current?.value
    const validated = validation.password.validate(password)

    if (!(validated.minimum && validated.required)) {
      alert(
        `${!validated.minimum ? '비밀번호는 8자 이상이어야 합니다.' : ''} ${!validated.required ? '비밀번호는 필수 입력 사항입니다.' : ''}`,
      )
    }
  }

  return (
    <div className='login-page w-96'>
      <img src='../src/assets/galaxy_image.jpg' alt='logo' className='w-full' />

      <UsernameInput validation={validation.id} />
      <PasswordInput validation={validation.password} />
      <Button className='mt-3 w-full' onClick={login}>
        로그인
      </Button>

      <div className='mt-3 text-center'>
        <a href='#'>회원가입 | </a>
        <a href='#'>비밀번호 찾기 | </a>
        <a href='#'>아이디 찾기</a>
      </div>

      <div className='mt-10 flex text-center gap-10 justify-center'>
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
  )
}
