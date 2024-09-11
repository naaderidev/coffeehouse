const express = require("express");
const UserModel = require("./../models/User");
const {
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
} = require("./../utils/authentication");
const cookie = require("cookie");
const { serialize } = require("cookie");

const authRouter = express.Router();

// **Sign Up
authRouter.post("/register", async (req, res) => {
  try {
    //catch data from request body
    const { name, username, email, phone, password, address, zip } = req.body;
    //simple validation for empty fileds
    if (
      !name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !address.trim() ||
      !zip.trim()
    ) {
      return res.status(405).json({ message: "empty fields error" });
    }
    //check user existance in database by email or phone
    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });
    if (isUserExist) {
      return res
        .status(422)
        .json({ message: "user exist already. please login!" });
    }
    //hash password with bcryptjs
    const hashedPassword = await hashPassword(password);
    //create token with JWT
    const token = generateToken({ email });
    //checking users for new user role
    const users = await UserModel.find({});
    //create new user model
    let newInfo = {
      name,
      username,
      email,
      phone,
      password: hashedPassword,
      address,
      zip,
      role: users.length > 0 ? "USER" : "ADMIN",
    };
    UserModel.create(newInfo);

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24, // 1day
          // sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Adjust based on environment
          sameSite: "None",
          secure: process.env.NODE_ENV === "production", // Use secure in production
        })
      )
      .status(201)
      .json({ message: "New User registerd in website" });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

// **Sign In -- email
authRouter.post("/login-email", async (req, res) => {
  try {
    //catch data from request body
    const { email, password } = req.body;
    //simple validation for empty fileds
    if (!email.trim() || !password.trim()) {
      return res.status(405).json({ message: "empty fields error" });
    }
    //check user existance in database by email or phone
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    //verify password with bcryptjs
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(424)
        .json({ message: "Email or password is incorrect" });
    }
    //create token with JWT
    const token = generateToken({ email: user.email });

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24, // 1day
          // sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Adjust based on environment
          sameSite: "None",
          secure: process.env.NODE_ENV === "production", // Use secure in production
        })
      )
      .status(200)
      .json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

// **Sign Out
authRouter.get("/logout", async (req, res) => {
  try {
    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", "", {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24, // 1day
          // sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Adjust based on environment
          sameSite: "None",
          secure: process.env.NODE_ENV === "production", // Use secure in production
        })
      )
      .status(200)
      .json({ message: "User logged out successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

// **Get Me
authRouter.get("/me", async (req, res) => {
  try {
    // Log the incoming cookies for debugging
    // console.log('req.get("Cookie"):', req.get("Cookie"));

    // Parse the cookie string to get the token
    const cookies = cookie.parse(req.get("Cookie") || "");
    const token = cookies.token;

    if (!token) {
      return res.status(401).json({ message: "You are not logged in" });
    }

    // Verify the token
    const tokenPayload = verifyToken(token);
    if (!tokenPayload) {
      return res
        .status(401)
        .json({ message: "Invalid token, please log in again" });
    }

    // Fetch the user based on the email from the token payload
    const user = await UserModel.findOne({ email: tokenPayload.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data (excluding sensitive information)
    const { password, ...userData } = user.toObject(); // Exclude password from response
    return res.status(200).json({ data: userData });
  } catch (err) {
    console.error("Error in /me endpoint:", err); // Log the error for debugging
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

module.exports = authRouter;
