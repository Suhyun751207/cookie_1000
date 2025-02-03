import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./style/event.css";

function Event() {
    const [scrollTriggered, setScrollTriggered] = useState(false);

    const handleClick = () => {
        setScrollTriggered(true);
    };

    useEffect(() => {
        if (scrollTriggered) {
            window.scrollBy({
                top: 1175,
                left: 0,
                behavior: 'smooth',
            });
            setScrollTriggered(false);
        }
    }, [scrollTriggered]);

    return (
        <>
            <div className="video-container">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    poster="https://www.cookierun-kingdom.com/static/keyVisualBackground-719081def4e815414aceaa9537015f67.png"
                    className="background-video"
                >
                    <source
                        src="https://www.cookierun-kingdom.com/static/pc.vp9-16076e5e49815f0e77288b02e58d9c16.webm"
                        type='video/webm; codecs="vp9"'
                    />
                    <source
                        src="https://www.cookierun-kingdom.com/static/pc.h264-8775f0e4c0abc7c39d7fd96533ef007a.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="overlay"></div>

                <div className="content">
                    <div className="wave_img"></div>
                    <div id="content_title">
                        <div id="title">
                            <div id="Firecook"></div>
                        </div>
                        <div id="content">
                            <p className="content-title-p">쿠킹런 킹덤 소통방</p>
                            <p className="content-content-p">1000명 기념 이벤트</p>
                            <button onClick={handleClick}>자세히 보기</button>
                            <div style={{display:"flex", gap:"20px"}}>
                                <Link to="https://open.kakao.com/o/gCoybvag" target="_blank" rel="noopener noreferrer">
                                    <div className="KakaoTalk_icon_div">
                                        <div className="KakaoTalk_icon"></div>
                                        <p>소통방 바로가기</p>
                                    </div>
                                </Link>
                                <Link to="https://open.kakao.com/o/swwCjvPe" target="_blank" rel="noopener noreferrer">
                                    <div className="KakaoTalk_icon_div">
                                        <div className="KakaoTalk_icon_1"></div>
                                        <p>제출&문의하기</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "200px" }}></div>
                </div>
            </div>
        </>
    );
}

export default Event;
