import { Cloudy } from "lucide-react";

export const CardDate = ({ active = false, date, children }) => {
  return (
    <div
      className={`${
        active
          ? "bg-blue-500 text-white hover:bg-blue-400"
          : "hover:bg-blue-500 hover:text-white group"
      } flex flex-col justify-center items-center gap-7 rounded-lg p-4 transition`}
    >
      <h3>{date}</h3>
      <Cloudy />
      <div>
        <h3
          className={`${
            active ? "text-gray-200" : "group-hover:text-gray-200"
          } text-xl font-light`}
        >
          Humidité
        </h3>
        <p className="text-2xl text-center">{children} %</p>
      </div>
    </div>
  );
};
