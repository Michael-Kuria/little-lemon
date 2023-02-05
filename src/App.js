import Header from "./components/global/Header";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
