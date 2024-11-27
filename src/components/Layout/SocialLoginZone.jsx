import { useState } from 'react';
import PrepAlert from '@/components/ui/prepAlert';


export default function SocialLoginZone(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <div className='mt-10 flex text-center gap-10 justify-center pb-10'>
          <div className="border-2 rounded-full cursor-pointer" onClick={openModal}>
            <img src='../src/assets/btnW_icon_circle.png' alt='naver_login' className='w-20' />
          </div>
          <div className="border-2 rounded-xl cursor-pointer" onClick={openModal}>
            <img src='../src/assets/Kakao.png' alt='naver_login' className='w-20' />
          </div>
          <div className="border-2 rounded-full cursor-pointer" onClick={openModal}>
            <img src='../src/assets/Google.png' alt='naver_login' className='w-20' />
          </div>
          {isModalOpen && <PrepAlert message="아직 준비중입니다!" closeModal={closeModal} />}
        </div>
    )
}