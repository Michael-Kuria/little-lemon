import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

const updateTimes = (availableTimes, action) => {
  // {change the state based on action.date}
  return availableTimes;
};

const initializeTimes = () => {
  return [];
};

// function updateTimes(state, action) {
//   // {change the state based on action.date}
// }
// function initializeTimes() {}

// //   const [availableTimes, setAvailableTimes] = useState([
// //     "17:00",
// //     "18:00",
// //     "19:00",
// //     "20:00",
// //   ]);

export default function BookingPage(props) {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}
