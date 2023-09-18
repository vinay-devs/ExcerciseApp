import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import ExerciseDetail from "../components/ExerciseDetail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExcerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideoData, setExerciseVideoData] = useState([]);
  const [targetMuscleData, setTargetMuscleData] = useState([]);
  const [equipmentExercises, setEquipmentExercise] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      const exerciseVideoData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`,
        youtubeOptions
      );
      const targetMuscleExerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`,
        exerciseOptions
      );
      // const equipmentExerciseData = await fetchData(
      //   `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseData.equipment}`,
      //   exerciseOptions
      // );
      console.log(targetMuscleExerciseData);

      // setEquipmentExercise(equipmentExerciseData);
      setTargetMuscleData(targetMuscleExerciseData);
      setExerciseVideoData(exerciseVideoData.contents);
      setExerciseDetail(exerciseData);
    };
    fetchExercisesData();
  }, [id]);
  console.log(targetMuscleData);
  return (
    <Box>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideoData={exerciseVideoData}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        bodyPart={false}
        targetExerciseMuscles={targetMuscleData}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExcerciseDetail;
