import { ExternalLinkIcon } from "@heroicons/react/outline";
import React from "react";

export default function GeoData({ geoData }) {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-center mt-14 md:mt-28">
      <div className="w-full md:w-6/12 justify-center flex flex-col">
        <p className="text-5xl lg:text-6xl font-semibold flex text-malibu-200 my-6 sm:my-4">
          Your Geo Data
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          IP Address: <b>{geoData.ip}</b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          City: <b>{geoData.city} </b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Region:{" "}
          <b>
            {geoData.region} ({geoData.region_code})
          </b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Country:{" "}
          <b>
            {geoData.country} ({geoData.country_code})
          </b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          ISP: <b>{geoData.isp}</b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Timezone: <b>{geoData.timezone}</b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Org: <b>{geoData.org}</b>
        </p>
        <a
          href={`https://www.google.com/maps/@${geoData.lat},${geoData.long}`}
          className="flex justify-center items-center w-max p-3 px-6 bg-malibu-300 text-malibu-900 font-semibold rounded-full shadow-lg hover:shadow-malibu-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 outline-none my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Location on Map
          <ExternalLinkIcon className="w-6 ml-2" />
        </a>
        <p className="text-sm opacity-50 pt-2">
          *GeoData is based on your ISP, it&apos;s not a precised location.
        </p>
      </div>
      <div className="w-full md:w-6/12 flex justify-center items-center">
        <img
          src="/geodata.svg"
          alt="image"
          className="select-none pointer-events-none w-11/12"
          draggable={false}
        />
      </div>
    </div>
  );
}
