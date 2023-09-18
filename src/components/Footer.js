import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="60px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center">
        <img src={Logo} alt="logo" />
        <Typography mb="20px">Made By Vinay Dev S</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
