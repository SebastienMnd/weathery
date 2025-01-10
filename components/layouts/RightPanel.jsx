import { useEffect, useState } from "react";

import Chart from "@/components/layouts/LineChart";

import { CardDate } from "@/components/ui/CardDate";
import { getForecast, getWeather } from "@/actions/server";

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
    temperature: 27.0,
    humidity: 20,
  },
  {
    hour: "16:00",
    temperature: 28.0,
    humidity: 12,
  },
  {
    hour: "20:00",
    temperature: 20.0,
    humidity: 20,
  },
  {
    hour: "24:00",
    temperature: 18.0,
    humidity: 25,
  },
];

export const RightPanel = ({ location }) => {
  // Constants
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState([]);

  // Loading
  useEffect(() => {
    if (location === "") return;
    getForecast({ lon: location.lon, lat: location.lat }).then((data) => {
      console.log(data);
      setWeatherData(data);
      setLoading(false);
    });
  }, [location]);

  // Verification
  if (loading) return <p>En cours de chargement...</p>;

  // Render

  return (
    <div className="col-span-2 flex flex-col justify-center gap-4 my-12">
      {/* Titre */}
      <p className="text-xl text-gray-600">Température</p>

      {/* Chart */}
      <Chart data={dataSet} />

      {/* GRID */}
      <div className="grid grid-cols-4 gap-2">
        <CardDate date={"Today"} active>
          30
        </CardDate>
        <CardDate date={"Tomorrow"}>40</CardDate>
        <CardDate date={"29th November"}>30</CardDate>
        <CardDate date={"30th November"}>30</CardDate>
      </div>
    </div>
  );
};
