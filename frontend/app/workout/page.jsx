"use client";

const WorkoutPage = () => {
  return (
    <div className="mt-5 flex flex-col gap-10 w-full">
      <div>
        <p className="ml-3 mb-2">New Exercise:</p>
        <div className="flex flex-row gap-2 justify-center items-center h-12">
          <input
            type="text"
            placeholder="Exercise name"
            className="bg-gray-200 px-5 h-full rounded-3xl w-full shadow-xl"
          />
          <button
            className="bg-blue-500 text-white text-xl w-1/4 h-full rounded-3xl shadow-xl"
            onClick={() => addExercise()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
