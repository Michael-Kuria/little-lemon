import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/bookings/BookingForm";
import "@testing-library/jest-dom/extend-expect";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Little Lemon /");
  expect(headingElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
