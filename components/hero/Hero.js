import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import {
  DesktopComputerIcon,
  GlobeIcon,
  LocationMarkerIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";

export default function Hero() {
  const [fingerprint, setFingerprint] = useState(null);
  useEffect(() => {
    const { ClientJS } = require("clientjs");
    // Create a new ClientJS object
    const client = new ClientJS();
    setFingerprint(client.getFingerprint());
  }, [fingerprint !== null]);
  return (
    <div className="mt-28">
      <Layout imgSrc="/hero.svg">
        <p className="text-6xl font-semibold flex text-malibu-200 my-4">
          Your Digital Fingerprint
        </p>
        <p className="text-3xl text-malibu-200/80">
          Check the your data which can be stolen whenever you visit a site.
        </p>
        <div className="my-4 flex flex-col gap-4">
          <p className="flex text-2xl items-center">
            <GlobeIcon className="w-10 stroke-[1] mr-2" />
            Geographical Data
          </p>
          <p className="flex text-2xl items-center">
            <DesktopComputerIcon className="w-10 stroke-[1] mr-2" />
            Device Data
          </p>
          <p className="flex text-2xl items-center">
            <LocationMarkerIcon className="w-10 stroke-[1] mr-2" />
            Loaction
          </p>
          <p className="flex text-2xl items-center">
            <PuzzleIcon className="w-10 stroke-[1] mr-2" />
            Plugins
          </p>
        </div>
        <p className="text-2xl py-4">Your secret identifier: <span className="font-bold">{fingerprint}</span></p>
        
      </Layout>
    </div>
  );
}
