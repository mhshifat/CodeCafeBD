// Import Dependencies
import mongoose from "mongoose";

// Creating a Schema
const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    required: true,
    trim: true
  },
  github: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export Model
export default mongoose.model("Project", projectSchema);
