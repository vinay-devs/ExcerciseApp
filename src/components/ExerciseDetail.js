import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Box>
      <Stack
        p="10px"
        gap="60px"
        alignItems="center"
        sx={{ flexDirection: "row" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            sx={{
              fontSize: { lg: "64px", xs: "30px" },
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
          <Typography fontSize="24px">
            {`Exercises keep you strong.${name} is one of the best exercises to target your ${target}. It will help you to improve your mood and gain energy`}
          </Typography>
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              sx={{ flexDirection: "row" }}
              alignItems="center"
              gap="20px"
            >
              <span
                style={{
                  backgroundColor: "rgb(255, 242, 219) ",
                  borderRadius: "50%",
                  height: "80px",
                  width: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <img src={item.icon} alt={item.name} />
              </span>

              <Typography fontSize="24px">{item.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExerciseDetail;
