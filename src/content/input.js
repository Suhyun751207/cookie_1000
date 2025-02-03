import React, { useState } from "react";
import { db } from "../firebase.js"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const RankingForm = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Firestore에 데이터를 추가하는 코드
    try {
      await addDoc(collection(db, "rankings"), {
        name: name,
        score: Number(score),
        timestamp: serverTimestamp(), 
      });
      setName(""); 
      setScore(""); 
      alert("Data successfully saved!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>Ranking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Score:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RankingForm;
