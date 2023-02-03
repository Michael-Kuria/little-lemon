import React from "react";
import StarIcon from "@mui/icons-material/Star";

const reviewers = [
  {
    image: "/assets/person1.png",
    name: "Martin Kinyua",
    noOfStars: 3,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image: "/assets/person2.png",
    name: "Laxix K",
    noOfStars: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image: "/assets/person4.png",
    name: "Alex",
    noOfStars: 5,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const Review = ({ image, name, reviewText, noOfStars }) => {
  return (
    <div>
      <div className="reviewer-info-container">
        <div className="reviewer-image-container">
          <div className="reviewer-star-number-container">
            <div className="star-container">
              {Array(noOfStars)
                .fill(true)
                .map((_, i) => (
                  <StarIcon key={i} />
                ))}
            </div>
            <div>{noOfStars}</div>
          </div>
          <div>
            <img
              src={image}
              width=""
              height="500px"
              alt="this is a picture of food"
            />
          </div>
        </div>
        <div>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testmonials() {
  return (
    <section>
      <div className="testmonials-container">
        <div>
          <p className="title">Testimonials</p>
        </div>
        <div>
          {reviewers.map((item) => (
            <Review {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
