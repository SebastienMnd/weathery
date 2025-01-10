"use client";

import { useEffect, useState } from "react";

import { dateFormat } from "@/lib/utils";
import { getWeather } from "@/actions/server";
import Image from "next/image";

export const LeftPanel = ({ location = "" }) => {
  // Constants
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  // Loading
  useEffect(() => {
    if (location === "") return;
    setLoading(true);
    getWeather({ location: location.name }).then((data) => {
      setWeatherData(data);
      setLoading(false);
    });
  }, [location]);

  // Verification
  if (loading) return <p>En cours de chargement...</p>;

  // Render
  return (
    <div className="col-span-1 flex flex-col items-center justify-center gap-12 my-12">
      <p className="text-xl text-gray-600 text-center">
        {location.name} <br />
        {new Date().toLocaleString("fr-FR", dateFormat)}
      </p>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-7 text-6xl font-bold">
          <div className="w-32 h-32 flex items-center justify-center relative">
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              fill
              alt={weatherData.weather[0].description}
            />
          </div>
          {Intl.NumberFormat("fr-FR", {
            style: "unit",
            unit: "celsius",
          }).format(weatherData.main.temp)}
        </div>
        <p className="text-6xl font-bold capitalize">
          {weatherData.weather[0].description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-center items-center gap-7 rounded-lg h-full min-h-36">
          <h3 className="text-3xl font-light text-gray-500 transition">
            Humidité
          </h3>
          <p className="text-2xl font-semibold">{weatherData.main.humidity}%</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-7 rounded-lg h-full">
          <h3 className="text-3xl font-light text-gray-500 text-center">
            Vitesse du vent
          </h3>
          <p className="text-2xl font-semibold">{weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};
