import User from "../models/User.js";

// READ
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, picturePath, location, occupation }) => {
        return { _id, firstName, lastName, picturePath, location, occupation };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    // if the given id is already in the friend list => remove him

    if (user.friends.includes(friendId)) {
      //remove the freind id from the users friend list
      user.friends = user.friends.filter((id) => id !== friendId);
      //removes the user id from the friend's friends list
      friend.friends = friend.friends.filter((id) => id !== id);
    }

    // if  the given id is not in the friend list => add him
    else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();


    //format output for the front end
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, picturePath, location, occupation }) => {
        return { _id, firstName, lastName, picturePath, location, occupation };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
