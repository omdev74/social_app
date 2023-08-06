import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";

import Friend from "components/Friend";

import { useState } from "react";
import WidgetWprapper from "components/WidgetWrapper";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { setPost } from "state";

// working of likes
// likes = {
//   userid1: true,
//   userid2: true,
// };

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  // colors
  const { palette } = useTheme();

  const main = palette.neutral.main;
  const primary = palette.primary.main;


  // function that will change the number of likes
  const pathchLike = async () => {
    console.log("patch like called");
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(
      setPost({
        post: updatedPost,
      })
    );
  };

  return (
    <WidgetWprapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="psot"
          style={{
            borderRadius: "0.75rem",
            marginTop: "0.7rem",
          }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap={"1rem"}>
          {/* liked section */}
          <FlexBetween gap={"0.3rem"}>
            <IconButton onClick={pathchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          {/* comments section */}
          <FlexBetween gap={"0.3rem"}>
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWprapper>
  );
};

export default PostWidget;
