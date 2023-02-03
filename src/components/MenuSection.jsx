import React from "react";

const Menu = ({ image, foodName, foodDescription, price }) => {
  return (
    <div className="menu-container">
      <div>
        <img
          src={image}
          width=""
          height="500px"
          alt="this is a picture of food"
        />
      </div>
      <div className="food-description">
        <p>{foodName}</p>
        <p>${price}</p>
      </div>
      <div>
        <p>{foodDescription}</p>
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
];
export default function MenuSection() {
  return (
    <section>
      <div className="menu-section-container">
        <div className="menu-section-header">
          <p className="title">This Week's Special</p>
          <button>Order Online</button>
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
