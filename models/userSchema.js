const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: String,
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    image: String,
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("User", userSchema);
