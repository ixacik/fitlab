import mongoose from "mongoose";
import { ExerciseSchema } from "@/models/ExerciseModel";

mongoose.connect(process.env.MONGO_URI);

export async function addExercise(request) {
  const Exercise = mongoose.model("Exercise", ExerciseSchema);

  const newExercise = new Exercise({
    userId: "123",
    exerciseName: "Squats",
    sets: 3,
    reps: 10,
    date: new Date(),
    length: 30,
  });

  newExercise.save((err) => {
    if (err) console.error(err);
    console.log("Exercise saved!");
  });
}
