import React from "react";
import "./card.css";

const PostItCard = ({ text, color }) => {
  return (
    <div className="post-it-card" style={{ backgroundColor: color }}>
      <p className="post-it-text">{text}</p>
    </div>
  );
};

export default PostItCard;
