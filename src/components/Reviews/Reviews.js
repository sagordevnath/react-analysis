import React from "react";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useLanguageReviews();

  return (
    <div>
      <div>
        <h1>Reviews</h1>
      </div>
      <div className="reviews-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
