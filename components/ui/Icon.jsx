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

const icons = {
  cloud: Cloudy,
  drizzle: CloudDrizzle,
  fog: CloudFog,
  hail: CloudHail,
  lightning: CloudLightning, // Correction de l'orthographe
  moon: CloudMoon,
  moonrain: CloudMoonRain,
  rain: CloudRain,
  rainwind: CloudRainWind,
  snow: CloudSnow,
  sun: CloudSun,
};

export const WeatherIcon = ({ icon, size }) => {
  const IconComponent = icons[icon];
  if (!IconComponent) return null;

  return <IconComponent size={size} />;
};
