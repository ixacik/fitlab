import MotivationCard from "../components/MotivationCard";
import StartWorkoutCard from "../components/StartWorkoutCard";
import PreviousWorkouts from "../components/PreviousWorkouts";

export default function Home() {
  return (
    <main className="mt-5 flex flex-col space-y-5">
      <MotivationCard />
      <StartWorkoutCard />
      <PreviousWorkouts />
    </main>
  );
}
