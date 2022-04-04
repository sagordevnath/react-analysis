import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, image } = review;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Review;
