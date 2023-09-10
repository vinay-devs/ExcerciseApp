import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyparts, setBodyparts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyparts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter((exercise) => {
        exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodypart.toLowerCase().includes(search);
      });
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack padding="20px" mt="34px" justifyContent="center" alignItems="center">
      <Typography
        fontWeight={700}
        mb="50px"
        sx={{ fontSize: { lg: "44px", xs: "30px" }, textAlign: "center" }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          heigth="76px"
          value={search}
          onChange={(e) => {
            return setSearch(e.target.value);
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative" }}>
        <HorizontalScrollbar data={bodyparts} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
