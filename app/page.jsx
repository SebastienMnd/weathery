"use client";

// React
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { getGeoCode } from "@/actions/server";

// Components
import { LeftPanel } from "@/components/layouts/LeftPanel";
import { RightPanel } from "@/components/layouts/RightPanel";

const Page = () => {
  // Constants
  const [locationInput, setLocationInput] = useState("");
  const [location, setLocation] = useState("");

  // Loading data
  const changeLocation = () => {
    getGeoCode({ location: locationInput }).then((data) => {
      if (data.length > 0) {
        console.log("Location : ", data[0]);
        setLocation(data[0]);
        setLocationInput(data[0].name);
      } else {
        setLocationInput("");
      }
    });
  };

  // Render
  return (
    <div className="bg-white h-4/5 w-4/5 p-4 rounded-lg flex flex-col gap-4 shadow-lg">
      {/* TITLE */}
      <div className="flex items-center justify-between rounded-lg border group">
        <input
          type="text"
          placeholder="Entrez votre ville"
          className="flex-1 px-2 py-1 outline-none"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <button onClick={() => changeLocation()} className="px-2 py-1 bg-blue-500 uppercase text-white rounded-r">
          <RefreshCw className="p-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-3 h-full">
        <LeftPanel location={location} />
        <RightPanel location={location} />
      </div>
    </div>
  );
};

export default Page;
