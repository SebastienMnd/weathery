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
        setLocation(data[0].name);
        setLocationInput(data[0].name);
      } else {
        setLocationInput("");
      }
    });
  };

  // Render
  return (
    <div className="bg-white h-4/5 w-4/5 p-4 rounded-lg flex flex-col gap-4">
      {/* TITLE */}
      <div className="flex items-center justify-between rounded-lg border overflow-hidden min-h-10">
        <input
          type="text"
          placeholder="Entrez votre ville"
          className="flex-1 px-2 py-1 outline-none"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <button
          onClick={() => changeLocation()}
          className="px-2 py-1 h-full min-w-12 bg-blue-500 uppercase text-white flex justify-center items-center"
        >
          <RefreshCw />
        </button>
      </div>

      <div className="grid grid-cols-3 h-full">
        <LeftPanel location={location} />
        <RightPanel />
      </div>
    </div>
  );
};

export default Page;
