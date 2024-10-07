import { useState } from 'react'

const NonSelectTicket = () => {
  const Reservation = () => { 
    //누르면 뭐 다음에 선택하는데로 이동하도록
  };

  return (
    <div className="ticket-container border p-8 rounded-lg text-center">
      <div className="product-info bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">상시상품</h2>
        <p className="text-gray-600">날짜/좌석 선택 없이 예매를 진행하세요.</p>
      </div>
      <button
        onClick={Reservation}
        className
        ="mt-6 px-4 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
      >예매하기</button>
    </div>
  );
};

export default NonSelectTicket;