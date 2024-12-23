import Chart from "@/components/layouts/LineChart";
import {
  Cloudy,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
} from "lucide-react";



const dataSet = [
  {
    hour: "00:00",
    temperature: 30.0,
    humidity: 34,
  },
  {
    hour: "04:00",
    temperature: 27.0,
    humidity: 42,
  },
  {
    hour: "08:00",
    temperature: 23.0,
    humidity: 47,
  },
  {
    hour: "12:00",
    temperature: 27.00,
    humidity: 20,
  },
  {
    hour: "16:00",
    temperature: 28.0,
    humidity: 12,
  },
  {
    hour: "20:00",
    temperature: 20.00,
    humidity: 20,
  },
  {
    hour: "24:00",
    temperature: 18.00,
    humidity: 25,
  },
];



const Page = () => {
  return (
    <div className="bg-white h-4/5 w-4/5 p-4 rounded-lg flex flex-col gap-4">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-4">
        Your city
        <input
          type="text"
          placeholder="Enter your city"
          className="px-2 py-1 rounded-lg border w-2/3"
        />
      </div>

      {/* RESULTS */}
      <div className="grid grid-cols-3 h-full">
        {/* COLONNE 1 */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-12 my-12">
          <p className="text-xl text-gray-600">{new Date().toLocaleString()}</p>
          <div className="flex-grow flex flex-col items-center justify-center">
            <p className="flex items-center justify-center gap-7 text-6xl font-bold">
              <Cloudy className="w-32 h-32" />
              20°C
            </p>
            <p className="text-6xl font-bold">Cloudy</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-light text-gray-600">Humidité</h3>
              <p className="text-2xl font-semibold">45 %</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-light text-gray-600">
                Vitesse du vent
              </h3>
              <p className="text-2xl font-semibold">19.2 m/s</p>
            </div>
          </div>
        </div>

        {/* COLONNE 2 */}
        <div className="col-span-2 flex flex-col justify-center gap-4 my-12">
          <p className="text-xl text-gray-600">Temperature</p>
            <Chart data={dataSet} />

          {/* GRID */}
          <div className="grid grid-cols-4 gap-2">
            {/* TODAY */}
            <div className="flex flex-col justify-center items-center gap-7 text-white bg-blue-500 rounded-lg h-full p-4">
              <h3>Today</h3>
              <Cloudy />
              <div>
                <h3 className="text-xl font-light text-gray-200">Humidité</h3>
                <p className="text-2xl">30 %</p>
              </div>
            </div>

            {/* TOMORROW */}
            <div className="flex flex-col justify-center items-center gap-7 rounded-lg h-full">
              <h3>Today</h3>
              <Cloudy />
              <div>
                <h3 className="text-xl font-light text-gray-600">Humidité</h3>
                <p className="text-2xl">30 %</p>
              </div>
            </div>

            {/* NEXT DAY */}
            <div className="flex flex-col justify-center items-center gap-7 rounded-lg h-full">
              <h3>Today</h3>
              <Cloudy />
              <div>
                <h3 className="text-xl font-light text-gray-600">Humidité</h3>
                <p className="text-2xl">30 %</p>
              </div>
            </div>

            {/* NEXT DAY */}
            <div className="flex flex-col justify-center items-center gap-7 rounded-lg h-full">
              <h3>Today</h3>
              <Cloudy />
              <div>
                <h3 className="text-xl font-light text-gray-600">Humidité</h3>
                <p className="text-2xl">30 %</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
