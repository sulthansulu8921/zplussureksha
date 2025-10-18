import React from "react";
import "../styles/Reviews.css";

const About: React.FC = () => {
  const handleReviewClick = () => {
    window.open("https://g.page/r/CS8l92oyqpPQEBM/review", "_blank");
  };

  return (
    <div className="Reviews-container">
      <h1 className="Reviews">
        Share your experience to improve our service quality <br />
      </h1>
      <button className="review-button" onClick={handleReviewClick}>
        Write a Review
      </button>
      <br />
      <p className="text_">Exciting future is ready</p>
      <div className="Reviews-container-img">
        <img
          src={`${process.env.PUBLIC_URL}/image/scaner.png`}
          alt="Reviews"
          className="Reviews-image"
        />
      </div>
    </div>
  );
};

export default About;
