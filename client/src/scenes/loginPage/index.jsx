import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";

import React from "react";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width={"100%"}
        padding="1rem 6%"
        backgroundColor={theme.palette.background.alt}
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Kumi くみ
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m={"2rem auto"}
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight={"500"}
          variant={"h5"}
          sx={{
            mb: "1.5rem",
          }}
        >
          Welcome to Kumi, the social media platform for connecting with
          friends, family, and like-minded individuals from all over the world.
          With Kumi, you can share your thoughts, photos, and videos with your
          followers, discover new content from people you admire, and join
          communities of people who share your interests. Whether you're looking
          to stay in touch with loved ones or explore new hobbies and passions,
          Kumi has something for everyone. So join us today and start building
          your online community on Kumi!
        </Typography>
        <Form></Form>
      </Box>
    </Box>
  );
};
export default LoginPage;
