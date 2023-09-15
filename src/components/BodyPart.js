import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, setBodyPart, bodyPart }) {
  //   console.log(bodyPart);
  //   console.log(item);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : " ",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        mt: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: "2200", left: "100", behavior: "smooth" });
      }}
    >
      <img src={Icon} style={{ width: "40px", height: "40px" }} alt="dumbell" />
      <Typography>{item}</Typography>
    </Stack>
  );
}

export default BodyPart;
