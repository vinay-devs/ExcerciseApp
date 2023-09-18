import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Exercises from "./Exercises";
import Loader from "./Loader";

const SimilarExercises = ({
  targetExerciseMuscles,
  equipmentExercises,
  bodyPart,
}) => {
  console.log(targetExerciseMuscles.length);
  const [exercise, setExercise] = useState([]);
  return (
    <Box p="20px" mt={{ lg: "50px", xs: "10px" }}>
      <Typography variant="h3" mb="46px">
        Exercises that target the same muscle group
      </Typography>
      <Stack>
        {targetExerciseMuscles.length ? (
          <Exercises
            bodyPart={bodyPart}
            exercises={targetExerciseMuscles}
            setExercises={setExercise}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
