const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

module.exports = {
  Login: async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email, username });
    if (!user) {
      return next(new AppError("User not found", "User not found", 404));
    }

    if (!password || !user.password) {
      return next(new AppError("Invalid input", "Invalid input", 400));
    }

    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      return next(
        new AppError("Incorrect password", "Password incorrect", 400)
      );
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.USER_ACCESS_TOKEN_SECRET,
      {
        expiresIn: 86400,
      }
    );

    const { password: hashedPassword, ...userData } = user._doc;

    res
      .status(200)
      .cookie("accessToken", token, {
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      })
      .json({
        status: "success",
        message: "Login successful, cookie initialized",
        data: userData,
      });
  },
  //
  //
  //
  Logout: async (req, res) => {
    res.status(200).clearCookie("accssToken").json({
      status: "success",
      message: "Logout Successful cookie cleared",
    });
  },
};
