import { FingerPrintIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ClientData from "../components/clientdata/ClientData";
import Footer from "../components/footer/Footer";
import GeoData from "../components/geodata/GeoData";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export default function Home() {
  const [geoData, setGeoData] = useState(null);
  const [browserDetails, setBrowserDetails] = useState(null);
  const [installedFonts, setInstalledFonts] = useState(null);
  // getting geolocation data, use effect dependency is set in a form such that it runs only till it gets a valid response
  useEffect(() => {
    axios.get("http://www.geoplugin.net/json.gp/").then((r) => {
      setGeoData({
        ip: r.data.geoplugin_request,
        lat: r.data.geoplugin_latitude,
        long: r.data.geoplugin_longitude,
        city: r.data.geoplugin_city,
        region: r.data.geoplugin_regionName,
        region_code: r.data.geoplugin_regionCode,
        country: r.data.geoplugin_countryName,
        country_code: r.data.geoplugin_countryCode,
        continent: r.data.geoplugin_continentName,
        continent_code: r.data.geoplugin_continentCode,
        currency: r.data.geoplugin_currencyCode,
        currency_symbol: r.data.geoplugin_currencySymbol,
        currency_value: r.data.geoplugin_currencyConverter,
      });
    });
  }, [geoData !== null]);
  // Getting data using clientjs
  useEffect(() => {
    const { ClientJS } = require("clientjs");
    // Create a new ClientJS object
    const client = new ClientJS();
    setBrowserDetails(client.getBrowserData());
    setInstalledFonts(client.getFonts().split(",").length);
    console.log(client.getBrowserData());
  }, [browserDetails !== null]);
  return (
    <>
      <Head>
        <title>Digital Fingerprint</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_sm.png" />
      </Head>
      {geoData !== null ? (
        <main className="p-6 sm:p-8 text-zinc-200">
          <Header />
          <Hero />
          <GeoData geoData={geoData} />
          <ClientData
            browserDetails={browserDetails}
            installedFonts={installedFonts}
          />
          <Footer />
        </main>
      ) : (
        <div className="min-h-screen w-full flex justify-center items-center text-malibu-400">
          <FingerPrintIcon className="w-10 animate-pulse" />
        </div>
      )}
    </>
  );
}
