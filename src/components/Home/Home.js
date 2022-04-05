import React from "react";
import { Link } from "react-router-dom";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useLanguageReviews();

  return (
    <>
      <div className="home-container mb-5">
        <div className="details-container lh-lg">
          <div className="title">
            <h2>
              Your <span className="text-info">Next</span> Programming
              Language..
            </h2>
            <h2>
              Your <span className="text-success">Best</span> Programming
              Language..{" "}
            </h2>
          </div>
          <p className="mt-4 mb-4">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies. The
            most important addition in React 18 is something we hope you never
            have to think about: concurrency.
          </p>
          <button type="button" class="btn btn-info btn-lg mt-5">
            Live Demo
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
            alt=""
          />
        </div>
      </div>
      <div className="review-container">
        <div className="review-heading">
          <h2>Language Reviews (3)</h2>
        </div>
        <div className="review-list">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
      <Link className="view-all-btn" to={"/reviews"}>        
        
        <button type="button" class="btn btn-outline-info">View All Reviews</button>
      </Link>
    </>
  );
};

export default Home;
