import React from "react";
import { Stack, Box, Typography } from "@mui/material";
const ExerciseVideos = ({ exerciseVideoData, name }) => {
  //   console.log(exerciseVideoData);

  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }}>
      <Typography p="20px" fontSize="50px">
        Watch <span style={{ color: "red" }}>{name}</span> Exercise Videos
      </Typography>
      <Stack
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
        flexDirection="row"
      >
        {exerciseVideoData?.slice(0, 3).map((item, index) => {
          //   console.log(item.video);
          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_black"
            >
              <img
                style={{ borderRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography variant="h5" color="black">
                  {item.video.title}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
