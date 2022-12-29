import Express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = Express.Router();

//Read part of the CRUD

// READ

// if someone send an id with the get route
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE
router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;



