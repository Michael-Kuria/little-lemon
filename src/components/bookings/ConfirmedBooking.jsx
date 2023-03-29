import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";
import React from "react";

export default function ConfirmedBooking() {
  return (
    <Box
      mt="5rem"
      width="100%"
      height="100%"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#495e57",
      }}
    >
      <Box
        background="red"
        height="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Box>
          <CheckCircleOutlineIcon sx={{ transform: "scale(5)" }} />
        </Box>
        <Box>
          <p className="subtitle">You have successfully Booked a table.</p>
        </Box>
      </Box>
    </Box>
  );
}
