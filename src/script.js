import React, { useState, useEffect } from "react";
import reviews from "./data";
import { Title } from "./Title";
import { Buttons } from "./Button";

const Script = () => {
  const [count, setCount] = useState(0);
  const [review, setReview] = useState(reviews[count]);

  // useEffect to re-render the components
  useEffect(() => {
    // rendered component
    setReview(reviews[count]);
  }, [count]);

  // function to decrement numbers
  const prevNum = () => {
    return setCount((num) => {
      // if the count is less than or equal to 0 reset count to 3(the length)
      if (num <= 0) {
        return (num = reviews.length - 1);
      } else {
        // else substract 1 from count
        return num - 1;
      }
    });
  };

  // function to increment numbers
  const nextNum = () => {
    return setCount((num) => {
      // if the count is less than 3(the length) added +1
      if (num < reviews.length - 1) {
        return num + 1;
      } else {
        // else reset count to 0
        return (num = 0);
      }
    });
  };

  const randomNum = () => {
    return setCount((num) => {
      // select a random number from 0 - 3
      num = Math.floor(Math.random() * reviews.length);

      return num;
    });
  };

  return (
    <React.Fragment>
      <Title />
      <article className="review">
        <Items {...review} next={nextNum} prev={prevNum} rand={randomNum} />
      </article>
    </React.Fragment>
  );
};

const Items = (props) => {
  const { name, job, image, text, next, prev, rand } = props;
  return (
    <>
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <Buttons next={next} prev={prev} rand={rand} />
    </>
  );
};

export default Script;
