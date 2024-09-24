import useEventInfo from "@/custom/useEventInfo"; 

const infoMain = () => {
    const { eventTitle, eventRank, posterSrc, eventDetails, ticketInfo, benefits } = useEventInfo();

    return (
    <div className="event-container">
      <h2>{eventTitle}</h2>
      <h3>{eventRank}</h3>

      <div className="event-content">
        <Poster src={posterSrc} />
        <EventDetails details={eventDetails} ticketInfo={ticketInfo} benefits={benefits} />
      </div>
    </div>
  );
  
};

const Poster = ({ src }) => (
    <div className="poster">
      <img src={src} alt="뮤지컬 포스터" className="poster-img" />
    </div>
);

const EventDetails = ({ details, ticketInfo, benefits }) => (
    <div className="info">
      <table>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
          <tr>
            <td>가격</td>
            <td>
              <ul>
                {ticketInfo.map((ticket, index) => (
                  <li key={index}>{ticket}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>혜택</td>
            <td>{benefits}</td>
          </tr>
        </tbody>
      </table>
  
      <div className="event-links">
        <span>티켓캐스트 1261</span>
        <span>혜택 정보</span>
        {/* 필요한 경우 링크 및 아이콘 추가 가능 */}
      </div>
    </div>
  );
  
  export default infoMain;