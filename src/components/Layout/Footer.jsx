const Footer = () => {
  return (
    <div className='flex flex-col justify-center w-full min-w-[1152px] text-stone-800 gap-10 pb-12'>
      <div className='flex flex-row items-center px-8 border-t border-b border-t-gray-200 border-b-gray-100 h-12'>
        <ul className='flex flex-row max-w-7xl justify-between flex-grow items-center h-10 gap-5 mx-auto text-[13px]'>
          <li>회사 소개</li>
          <li>이용 약관</li>
          <li>개인정보 처리 방침</li>
          <li>위치기반 서비스 이용약관</li>
          <li>여행 약관</li>
          <li>여행자보험 가입 내역</li>
          <li>티켓판매안내</li>
          <li>공지사항</li>
          <li>고객센터</li>
          <li>Language</li>
        </ul>
      </div>
      <div className='flex flex-row w-full max-w-[1340px] box-border px-8 gap-24 mx-auto text-xs/5'>
        <div>
          <h2 className='font-[700] text-base'>(주)인터파크트리플</h2>
          <p>주소 서울 서초구 강남대로 447 남서울빌딩 6층</p>
          <p>사업자등록번호 824-81-02515</p>
          <p>통신판매업신고 2024-서울서초-2319</p>
          <p>관광사업증 등록번호 : 제2024-000018호</p>
          <p>호스팅서비스제공자 (주)인터파크트리플｜대표이사 최휘영</p>
        </div>
        <div>
          <h2 className='font-[700] text-base'>고객센터</h2>
          <p>투어 1588-3443｜티켓 1544-1555</p>
          <p>팩스 02-830-7807｜이메일 helpdesk@interparktriple.com</p>
          <p>해외항공 02-3479-4399｜국내항공 02-3479-4340</p>
        </div>
        <div>
          <h2 className='font-[700] text-base'>전자금융거래 분쟁처리 담당</h2>
          <p>투어 1588-3443｜티켓 1544-1555</p>
          <p>팩스 02-830-7807｜이메일 helpdesk@interparktriple.com</p>
          <p>개인정보보호책임자 cpo@interparktriple.com</p>
        </div>
      </div>
      <div className='mx-auto px-7 text-xs/5 font-[400]'>
        <div>
          <p>
            (주)인터파크트리플은 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여행상품에
            대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보, 거래에 관한 의무와 책임은
            판매자에게 있습니다.
          </p>
          <p>
            항공권 또는 항공권이 포함된 경우, 표시되는 상품요금은 예상 유류할증료와 제세공과금이
            포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다.
          </p>
          <p>
            (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의 당사자가
            아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은 일체 책임을
            지지 않습니다.
          </p>
          <p>Copyright ⓒ InterparkTriple Corp. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
