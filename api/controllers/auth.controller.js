import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userValid = await User.findOne({ email });
    if (!userValid) return next(errorHandler(401, "Invalid email or password"));
    const passwordValid = bcryptjs.compareSync(password, userValid.password);
    if (!passwordValid)
      return next(errorHandler(401, "Invalid email or password"));
    const token = jwt.sign({ id: userValid._id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
    const { password: _, ...userWithoutPassword } = userValid._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};
