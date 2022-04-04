import React from "react";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import "./Home.css";

const Home = () => {
  const [reviews] = useLanguageReviews();

  return (
    <>
      <div className="home-container">
        <div className="details-container">
          <h1>Home</h1>
        </div>
        <div className="image-container">
          <img
            src="http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
            alt=""
          />
        </div>
      </div>
      <div className="review-container">
        <div className="review-heading">
          <h1>Language Reviews (3)</h1>
        </div>
        <div className="review-list">
          {reviews.map((review) => (
            <p>{review.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
