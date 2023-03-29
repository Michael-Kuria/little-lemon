import Header from "./components/global/Header";
import Home from "./components/Home";
// import Reservations from "./components/Reservations";
import BookingPage from "./components/bookings/BookingPage";
import { Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./components/bookings/ConfirmedBooking";
import SideMenu from "./components/SideMenu";
import * as React from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <main>
      <SideMenu state={state} toggleDrawer={toggleDrawer} />
      <Header toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default App;
