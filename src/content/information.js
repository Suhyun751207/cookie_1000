import "./style/information.css";

function Information() {
    return (
        <div className="information-container">
            <div className="event-content">
                <h1 className="event-title">이벤트 가이드</h1>
                <div className="event-content_top">
                    <div className="event-content_top_div">
                        <div className="img-1" />
                        <h1>1. 스페셜 에피소드 선택!</h1>
                        <p>스페셜 에피소드 선택에서 "섬머소다 락페스타"를 입장합니다.<br /><span style={{fontWeight:"bold"}}>참여조건: 소통방 인원, 리듬게임이 가능한 모두 가능</span></p>
                    </div>
                    <div className="event-content_top_div">
                        <div className="img-2" />
                        <h1>2. 리듬 스테이지 진입!</h1>
                        <p>왼쪽 아래 리듬 스테이지를 클릭하여, 파르페맛 쿠키의<br />"Sweet Serenade"를 클릭해주세요!</p>
                    </div>
                    <div className="img-event" />
                </div>
                <div className="event-content_bottom">
                    <div className="img-event_1" />
                    <div className="event-content_bottom_div">
                        <div className="img-3" />
                        <h1>3. 스테이지 클리어하기!</h1>
                        <p>스테이지 입장 후 꼭 <span style={{color:"red",fontWeight:"bold"}}>"하드"</span> 모드로 플레이하세요!<br />
                            (하드 모드가 아니면 점수가 낮아집니다)</p>
                    </div>
                    <div className="event-content_bottom_div">
                        <div className="img-4" />
                        <h1>4. 결과 공유하기</h1>
                        <p>자신의 최고기록을 "Specialꗜ수현(퓨섭)" 개인톡방으로 제출하기.<br />
                            (아래 주의사항을 읽어주세요)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
