import React from "react";

const Menu = ({ image, foodName, foodDescription, price }) => {
  return (
    <div className="menu-container">
      <div className="menu-image">
        <img src={image} width="" height="" alt="this is a picture of food" />
      </div>
      <div className="food-description-container">
        <div className="food-price-container">
          <p className="food-title">{foodName}</p>
          <p style={{ color: "red" }}>${price}</p>
        </div>
        <div>
          <p>{foodDescription}</p>
        </div>
      </div>
    </div>
  );
};

const food = [
  {
    image: "/assets/greek salad.jpg",
    foodName: "Greek Salad",
    foodDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "2000",
  },
  {
    image: "/assets/lemon dessert.jpg",
    foodName: "Lemon Dessert",
    foodDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "2000",
  },
  {
    image: "/assets/bruchetta.svg",
    foodName: "Bruchetta",
    foodDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "2000",
  },
  {
    image: "/assets/greek salad.jpg",
    foodName: "Greek Salad",
    foodDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "2000",
  },
  {
    image: "/assets/bruchetta.svg",
    foodName: "Bruchetta",
    foodDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "2000",
  },
];
export default function MenuSection() {
  return (
    <section className="menu-section">
      <div className="menu-section-container">
        <div className="menu-section-header">
          <p className="title">This Week's Special</p>
          <div>
            <button>Order Online</button>
          </div>
        </div>
        <div className="menu-section-scroller">
          {food.map((item) => (
            <Menu {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
