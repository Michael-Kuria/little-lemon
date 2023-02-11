import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function BookingForm() {
  var h = document.querySelector("header").offsetHeight;
  const [startDate, setStartDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);

  return (
    <>
      <Box height={`calc(100vh - ${h}px)`} backgroundColor="#edefee">
        <Box
          backgroundColor="#495e57"
          className="reservations-title-box"
          textAlign="center"
        >
          <span className="title" style={{ color: "#f4ce14" }}>
            Little Lemon /
          </span>
          <span
            className="title"
            style={{ fontSize: "32px", color: "#edefee" }}
          >
            Reservations
          </span>
        </Box>
        <VStack
          backgroundColor="#edefee"
          width="100%"
          alignItems="center"
          paddingTop="2rem"
        >
          <form>
            <VStack width="400px" alignItems="center">
              <FormControl>
                <FormLabel htmlFor="date">Date</FormLabel>
                <DatePicker
                  className="date-picker"
                  selected={startDate}
                  // showTimeSelect
                  // dateFormat="Pp"
                  onChange={(date) => setStartDate(date)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select placeholder="Select Time">
                  {availableTimes.map((time) => (
                    <option value={time}>{time}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="numberOfGuests">Number Of Guests</FormLabel>
                <Input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="seatingOptions">Seating Options</FormLabel>
                <Select placeholder="Select Occasion">
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
              </FormControl>
              <HStack width="100%" justifyContent="flex-end">
                <Button
                  type="submit"
                  backgroundColor="#f4ce14"
                  color="#333333"
                  outline="none"
                  border="1px solid #333333"
                  padding="1rem 2rem"
                  borderRadius={10}
                >
                  Submit Reservation
                </Button>
              </HStack>
            </VStack>
          </form>
        </VStack>
      </Box>
    </>
  );
}

{
  /* <form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form> */
}
