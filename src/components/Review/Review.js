import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, image, description, ratings } = review;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title text-center my-3">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        <p className="mt-5">
           <div className="ratings">
        Ratings: <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <span>({ratings})</span>
            </div>
        </p>
      </div>
    </div>
  );
};

export default Review;
