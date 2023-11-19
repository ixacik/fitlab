import { FaStopwatch, FaFire } from "react-icons/fa";

const PreviousWorkouts = () => {
  const previousWorkouts = [
    {
      type: "Push Day",
      duration: "2 hours",
      kcal: "500 kcal",
    },
    {
      type: "Pull Day",
      duration: "2 hours",
      kcal: "740 kcal",
    },
    {
      type: "Leg Day",
      duration: "1 hours",
      kcal: "350 kcal",
    },
    {
      type: "Leg Day",
      duration: "1 hours",
      kcal: "350 kcal",
    },
    {
      type: "Leg Day",
      duration: "1 hours",
      kcal: "350 kcal",
    },
    {
      type: "Leg Day",
      duration: "1 hours",
      kcal: "350 kcal",
    },
    {
      type: "Leg Day",
      duration: "1 hours",
      kcal: "350 kcal",
    },
  ];

  return (
    <div>
      <p className="font-medium text-gray-500 ml-3">Your previous workouts:</p>
      {previousWorkouts.map((workout) => (
        <div className="bg-gradient-to-br from-gray-900 via-slate-500 to-gray-300 shadow-xl text-white font-medium rounded-3xl p-7 mt-5">
          <p className="text-xl font-bold mb-4 text-slate-200">
            {workout.type}
          </p>
          <div className="text-lime-500 flex items-center mb-2">
            <FaStopwatch size={20} />
            <p className="ml-2 text-sm">{workout.duration}</p>
          </div>
          <div className="text-orange-400 flex items-center">
            <FaFire size={20} />
            <p className="ml-2 text-sm">{workout.kcal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousWorkouts;
