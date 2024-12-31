"use server";

const weatherFormat = {
  units: "metric",
  lang: "fr",
};

export const getGeoCode = async ({ location = "" }) => {
  const api_key = process.env.WEATHER_API_KEY;
  let information;

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${api_key}&limit=1`
  );
  const data = await response.json();
  information = data;

  console.log("Get GeoCode : ", information);

  return information;
};

export const getWeather = async ({ location = "" }) => {
  const api_key = process.env.WEATHER_API_KEY;
  let information;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=${weatherFormat.lang}&units=${weatherFormat.units}&appid=${api_key}`
  );
  const data = await response.json();
  information = data;
  
  console.log("Get Weather : ", information);

  return information;
};
