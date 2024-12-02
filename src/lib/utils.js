import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export async function authFetch(url, option) {
  // 기본 요청
  const response = await fetch(url, option)

  // 토큰 만료
  if (response.status === 401) {
    // 리프레시 토큰으로 새로운 액세스 토큰을 요청
    const refreshResponse = await fetch('http://localhost:8080/reissue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })

    if (refreshResponse.ok) {
      const newAccessToken = refreshResponse.headers.get('authorization')
      // 새로운 액세스 토큰을 로컬 스토리지에 저장
      sessionStorage.setItem('token', newAccessToken)

      option.headers.Authorization = newAccessToken

      // 새로 발급된 액세스 토큰으로 원래 요청을 다시 시도
      const retryResponse = await fetch(url, option)

      return retryResponse
    } else {
      sessionStorage.clear()
      window.location.href = '/login'
    }
  }
  return response
}

async function test() {
  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
      Authorization: sessionStorage.getItem('token'),
    },
    credentials: 'include',
  }
  const response = await authFetch('http://localhost:8080/api/products/test', option)
  console.log('test response : ', response)
}
