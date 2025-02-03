import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import video from "./video.mp4";
import "./style/Indu.css";

function Indu() {
    return (
        <div className="container">
            <h1 className="title">질문 및 답변</h1>
            <div className="card_div_indu">
                <div className="card">
                    <p>Q. 이번 이벤트 보상은 무엇인가요?</p>
                    <p className="answer">A. 킹덤패스 보상입니다. 총 1~3위까지 3분에게 지급이 될 예정입니다.</p>
                </div>
                <div className="card">
                    <p>Q. 인증절차가 무엇인가요?</p>
                    <p className="answer">A. 아래 영상처럼 "똑같이" 찍어서 제출해주시면 됩니다.<br/>(이상하거나 인증이 안돼면 랭킹 기록이 안됩니다.)</p>
                </div>
                <div className="video-container_indu">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="card">
                    <p>Q. + ???는 무엇인가요?</p>
                    <p className="answer">A. 만약 랭킹 점수의 동점이 많을 경우 리듬게임을 하나 더 추가할 계획입니다.</p>
                </div>
                <div className="card">
                    <p>Q. 어디에 제출하나요?</p>
                    <p className="card-link">
                        A. "Specialꗜ수현(퓨섭)" 개인 톡방에 보내주세요!
                        <Link to="https://open.kakao.com/o/swwCjvPe" target="_blank" rel="noopener noreferrer">
                            <CiLink size={24} />
                        </Link>
                    </p>
                </div>
                <div className="card">
                    <p>Q. 문의는 어디에 하나요?</p>
                    <p className="answer">A. 똑같이 "Specialꗜ수현(퓨섭)" 개인 톡방에 문의하시면 됩니다.</p>
                </div>
                <div className="card">
                    <p>Q. 기간은 언제까지인가요?</p>
                    <p className="answer">A. 공지하고 3~4일 후 정도로 생각합니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Indu;
