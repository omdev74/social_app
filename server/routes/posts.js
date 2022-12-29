import { verifyToken } from "../middleware/auth.js";
import Express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

const router = Express.Router();

// READ

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//UPDATE

router.patch("/:id/like", verifyToken, likePost);

export default router;
