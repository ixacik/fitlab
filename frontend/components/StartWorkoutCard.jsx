import Link from "next/link";

const StartWorkoutCard = () => {
  return (
    <div className="bg-blue-400 font-medium px-auto w-full py-3 rounded-3xl shadow-xl flex justify-center">
      <Link href={"/workout"} className="w-full text-center text-white">
        Start an empty workout
      </Link>
    </div>
  );
};

export default StartWorkoutCard;
