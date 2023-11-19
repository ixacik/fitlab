import mongoose from "mongoose";

export const ExerciseSchema = new mongoose.Schema({
  userId: String,
  exerciseName: String,
  sets: Number,
  reps: Number,
  date: Date,
  length: Number,
});
