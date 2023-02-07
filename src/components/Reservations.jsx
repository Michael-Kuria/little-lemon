import {
  Box,
  Grid,
  GridItem,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Textarea,
  HStack,
} from "@chakra-ui/react";
import React from "react";
export default function Reservations() {
  return (
    <>
      <Box>
        <Box p={"1rem 10rem 1rem 10rem"} backgroundColor="#495e57">
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
        <Box>
          <form>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap="2rem"
              p={"1rem 10rem 1rem 10rem"}
              backgroundColor="#edefee"
            >
              <GridItem>
                <VStack alignItems="flex-start">
                  <p className="subtitle">Personal Details</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut e
                  </p>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack alignItems="flex-start" marginTop="5px" gap="1rem">
                  <FormControl width="100%">
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      size="md"
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input id="lastName" name="lastName" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" name="email" type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="confirm-email">Confirm Email</FormLabel>
                    <Input
                      id="confirm-email"
                      name="confirm-email"
                      type="email"
                    />
                  </FormControl>
                </VStack>
              </GridItem>
              <GridItem
                colSpan={2}
                height="2px"
                backgroundColor="#495e57"
              ></GridItem>
              <GridItem>
                <VStack alignItems="flex-start">
                  <p className="subtitle">Table Details</p>
                  <Box>
                    <Image
                      src="assets/restaurant.jpg"
                      alt="restautant"
                      boxSize="250px"
                      objectFit="cover"
                    />
                  </Box>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack alignItems="flex-start" marginTop="5px" gap="1rem">
                  <FormControl>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input id="date" name="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Input id="time" name="time" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="numberOfGuests">
                      Number Of Guests
                    </FormLabel>
                    <Input
                      id="numberOfGuests"
                      name="numberOfGuests"
                      type="email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="seatingOptions">
                      Seating Options
                    </FormLabel>
                    <Input
                      id="seatingOptions"
                      name="seatingOptions"
                      type="email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea id="comment" name="comment" height={250} />
                  </FormControl>
                </VStack>
              </GridItem>
            </Grid>
            <HStack
              p={"1rem 10rem 1rem 10rem"}
              backgroundColor="#495e57"
              justifyContent="flex-end"
            >
              <Box>
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
              </Box>
            </HStack>
          </form>
        </Box>
      </Box>
    </>
  );
}
