import {
  Box,
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [occasionDate, setOccasionDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      date: occasionDate,
      time: "",
      numberOfGuests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      numberOfGuests: Yup.number()
        .min(1, "Too little")
        .max(10, "Too big")
        .required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  return (
    <>
      <Box height={`calc(100vh - ${76}px)`} backgroundColor="#edefee">
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
          <form onSubmit={formik.handleSubmit}>
            <VStack width="400px" alignItems="center" gap={4}>
              <FormControl
                isInvalid={formik.touched.date && formik.errors.date}
              >
                <FormLabel htmlFor="date">*Date</FormLabel>
                <DatePicker
                  id="date"
                  className="date-picker"
                  selected={occasionDate}
                  // showTimeSelect
                  // dateFormat="Pp"
                  {...formik.getFieldProps("date")}
                  onChange={(date) => {
                    setOccasionDate(date);
                    dispatch({ date: date });
                  }}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
              >
                <FormLabel htmlFor="time">*Time</FormLabel>
                <Select
                  placeholder="Select Time"
                  id="time"
                  {...formik.getFieldProps("time")}
                >
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.numberOfGuests && formik.errors.numberOfGuests
                }
              >
                <FormLabel htmlFor="numberOfGuests">
                  *Number Of Guests
                </FormLabel>
                <Input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  {...formik.getFieldProps("numberOfGuests")}
                />
                <FormErrorMessage>
                  {formik.errors.numberOfGuests}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.occasion && formik.errors.occasion}
              >
                <FormLabel htmlFor="occasion" id="occasion">
                  *Seating Options
                </FormLabel>
                <Select
                  placeholder="Select Occasion"
                  {...formik.getFieldProps("occasion")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
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
