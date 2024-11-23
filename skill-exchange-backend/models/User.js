const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    skills: {
      type: [String], // An array of strings for skills
      default: [],
    },
    experience: {
      type: String, // A string that describes the user's experience
      default: '',
    },
    ratings: {
      type: Number,
      default: 0, // A numeric rating system (e.g., out of 5)
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
