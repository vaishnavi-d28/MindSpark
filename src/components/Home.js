import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/theme.css';

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 23, name: "History" },
  { id: 20, name: "Mythology" }
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="quiz-bg">
      <h1 className="quiz-title">MindSpark</h1>
      <div className="category-list">
        {categories.map(c =>
          <button
            key={c.id}
            className="quiz-btn"
            onClick={() => navigate(`/quiz/${c.id}`)}
          >
            {c.name}
          </button>
        )}
      </div>
      <button className="quiz-btn" onClick={() => navigate('/track')}>View Track Record</button>
    </div>
  );
}
