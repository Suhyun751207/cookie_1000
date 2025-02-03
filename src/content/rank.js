import React, { useEffect, useState } from "react";
import { db } from "../firebase.js"; // Firebase 설정 파일
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import "./style/rank.css";

function Rank() {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "rankings"), orderBy("score", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const rankingData = snapshot.docs.map((doc, index) => ({
                id: doc.id,
                rank: index + 1,
                ...doc.data(),
            }));
            setRankings(rankingData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="rank_background">
            <div className="rank_container">
                <div className="rank_title">
                    <h2 style={{marginBottom:"10px"}}>쿠키런 킹덤 소통방 - 1000명 기념<br />이벤트 랭킹 현황</h2>

                    <div className="rank_table">
                        <div className="rank_header">
                            <div>순위</div>
                            <div>이름</div>
                            <div>점수</div>
                        </div>

                        <div className="rank_body">
                            {rankings.map((user) => (
                                <div className="rank_row" key={user.id}>
                                    <div className="rank_cell">{user.rank}위</div>
                                    <div className="rank_cell">{user.name}</div>
                                    <div className="rank_cell">
                                        {user.score.toLocaleString()} + ???점
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rank;
