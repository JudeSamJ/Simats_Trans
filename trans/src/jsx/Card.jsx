import React from "react";
import ReactDOM from "react-dom";
import "../css/card.css"; // Optional: Use for styling

const Card = () => {
  // Get the current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="container">
      {/* Top Bar */}
      <div className="top-bar">
        {formattedDate} <br/>VALID
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="card">
          <img
          src="./public/male-svgrepo-com.svg"
          alt="Icon"
          className="card-icon"/>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        RETTERI 5
      </div>
    </div>
  );
};

export default Card;
