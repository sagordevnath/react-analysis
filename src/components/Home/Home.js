import React from "react";
import { Link } from "react-router-dom";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useLanguageReviews();

  return (
    <>
      <div className="home-container">
        <div className="details-container">
          <h1>Your Next Language</h1>
          <h1>Your Best Language</h1>
          <p>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies.
          </p>
          <button>Live Demo</button>
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
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
      <Link to={"/reviews"}>
        <button className="view-all-btn">View All Reviews</button>
      </Link>
    </>
  );
};

export default Home;
