import { useState } from 'react';
import { Link } from 'react-router-dom';
import PrepAlert from '@/components/ui/prepAlert';

const EventComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-bold underline'>이벤트</h2>
      <div className='flex gap-5 justify-center mt-10'>
        <div className='cursor-pointer' onClick={openModal}>
            <img className='h-auto' src='../src/assets/images/events/event1.png' />
          </div>
        <div className='cursor-pointer' onClick={openModal}>
          <img className='h-auto' src='../src/assets/images/events/event2.png' />
        </div>
        <div className='cursor-pointer' onClick={openModal}>
          <img className='h-auto' src='../src/assets/images/events/event3.png' />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <PrepAlert message="아직 준비중입니다!" closeModal={closeModal} />}
    </div>
  );
};

export default EventComponent;
