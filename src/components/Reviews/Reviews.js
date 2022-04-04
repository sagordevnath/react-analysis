import React from "react";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useLanguageReviews();

  return (
    <div>
      <div>
        <h2 className="text-center mt-3">Developers Reviews</h2>
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
