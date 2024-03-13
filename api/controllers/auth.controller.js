import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successfull");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  return newUser;
};
