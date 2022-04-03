import React from "react";
import useLanguageReviews from "../../hooks/useLanguageReviews";
import "./Home.css";

const Home = () => {
  const [reviews] = useLanguageReviews();

  return (
    <>
      <div className="home-container">
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <img
            src="http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
            alt=""
          />
        </div>
      </div>
      <div>
        {reviews.map((review) => (
          <p>{review.name}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
