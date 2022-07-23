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
  const [browserDetail, setBrowserDetail] = useState(null);
  const [plugins, setPlugins] = useState(null);
  const [installedFonts, setInstalledFonts] = useState(null);
  // getting geolocation data, use effect dependency is set in a form such that it runs only till it gets a valid response
  useEffect(() => {
    axios.get("http://www.geoplugin.net/json.gp").then((r) => {
      setGeoData({
        ip: r.data.geoplugin_request,
        lat: r.data.geoplugin_latitude,
        long: r.data.geoplugin_longitude,
        city: r.data.geoplugin_city,
        region: r.data.geoplugin_regionName,
        regin_code: r.data.geoplugin_regionCode,
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
    setBrowserDetail(client.getBrowserData());
    setPlugins(client.getPlugins().split(","));
    setInstalledFonts(client.getFonts().split(","));
  }, [browserDetail !== null]);
  return (
    <>
      <Head>
        <title>Digital Fingerprint</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_sm.png" />
      </Head>

      <main className="p-2">
        <Header />
        <Hero />
        <GeoData />
        <ClientData />
        <Footer />
      </main>
    </>
  );
}
