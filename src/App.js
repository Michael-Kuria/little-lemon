import Header from "./components/global/Header";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import BookingPage from "./components/bookings/BookingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<BookingPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
