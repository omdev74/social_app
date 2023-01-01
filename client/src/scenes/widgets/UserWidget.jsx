import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWprapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setuser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setuser(data);
  };
  // get user will be called when the component is rendered
  useEffect(() => {
    getUser();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }
  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWprapper>
      {/* 1st row */}
      <FlexBetween
        gap={"0.5 rem"}
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap={"1rem"}>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>
      <Divider />

      {/* 2nd row */}
      <Box p="1rem 0">
        <Box display={"flex"} alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined
            fontSize="large"
            sx={{
              color: main,
            }}
          />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display={"flex"} alignItems="center" gap="1rem" mb="0.5rem">
          <WorkOutlineOutlined
            fontSize="large"
            sx={{
              color: main,
            }}
          />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      {/* 3rd row */}
      <Box p="1rem 0 ">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who has viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      {/* 4th row */}
      <Box p="1rem 0 ">
        <Typography fontSize={"1rem"} color={main} mb={"1rem"} fontWeight="500">
          Social Profiles
        </Typography>

        {/* Twitter Logo */}
        <FlexBetween gap={"1rem"} mb="0.5rem">
          <FlexBetween gap={"1rem"}>
            <img src="./assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        {/* Linkedin Logo */}
        <FlexBetween gap={"1rem"}>
          <FlexBetween gap={"1rem"}>
            <img src="./assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWprapper>
  );
};

export default UserWidget;
