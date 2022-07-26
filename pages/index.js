import { FingerPrintIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import Script from "next/script";
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
    axios.get("https://geolocation-db.com/json/").then((res) => {
      axios.get(`/api/hello?ip=${res.data.IPv4}`).then((r) => {
        console.log(r.data);
        setGeoData({
          ip: res.data.IPv4,
          lat: r.data.lat,
          long: r.data.lon,
          city: r.data.city,
          region: r.data.regionName,
          region_code: r.data.region,
          country: r.data.country,
          country_code: r.data.countryCode,
          isp: r.data.isp,
          timezone: r.data.timezone,
          org: r.data.org,
        });
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
  }, [browserDetails !== null]);
  return (
    <>
      <Head>
        <title>Digital Fingerprint</title>
        <link rel="icon" href="/logo_sm.png" />
        <meta name="title" content="Digital FIngerprint" />

        <meta
          name="description"
          content="Check your data which may be stolen every time you visit a site."
        />

        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://df.itsvg.in" />

        <meta property="og:title" content="Digital FIngerprint" />

        <meta
          property="og:description"
          content="Check your data which may be stolen every time you visit a site."
        />

        <meta property="og:image" content="https://df.itsvg.in/webimg.png" />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:url" content="https://df.itsvg.in" />

        <meta property="twitter:title" content="Digital FIngerprint" />

        <meta
          property="twitter:description"
          content="Check your data which may be stolen every time you visit a site."
        />

        <meta
          property="twitter:image"
          content="https://df.itsvg.in/webimg.png"
        />
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TXP284E36T"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TXP284E36T', { page_path: window.location.pathname });
            `,
        }}
      />
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
