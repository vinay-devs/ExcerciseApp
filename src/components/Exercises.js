import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

function Exercises({ bodyPart, exercises, setExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  let exercisePerPage = 9;
  if (!bodyPart) {
    exercisePerPage = 3;
  }

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (!bodyPart) {
        setExercises(exercises);
      } else if (bodyPart == "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 2200, behavior: "smooth" });
  };
  return (
    <Box id="excercies" mx={{ mt: { lg: "110px" } }}>
      {bodyPart && (
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
      )}

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
