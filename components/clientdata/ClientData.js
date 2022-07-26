import React from "react";

export default function ClientData({ browserDetails, installedFonts }) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center mt-14 md:mt-28">
      <div className="w-full md:w-6/12 justify-center flex flex-col">
        <p className="text-5xl lg:text-6xl font-semibold flex text-malibu-200 my-6 sm:my-4">
          Device Details
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Browser:{" "}
          <b>
            {browserDetails.browser.name} v {browserDetails.browser.version}
          </b>
        </p>
        {browserDetails.cpu.architecture !== undefined && (
          <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
            CPU arch: <b>{browserDetails.cpu.architecture}</b>
          </p>
        )}
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Browser Engine: <b>{browserDetails.engine.name}</b>
        </p>
        {browserDetails.device.vendor !== undefined && (
          <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
            Device Vendor: <b>{browserDetails.device.vendor}</b>
          </p>
        )}
        {browserDetails.device.model !== undefined && (
          <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
            Device Model: <b>{browserDetails.device.model}</b>
          </p>
        )}
        {browserDetails.device.type !== undefined && (
          <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
            Device Type: <b>{browserDetails.device.type}</b>
          </p>
        )}
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Operating System: <b>{browserDetails.os.name}</b>
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-4">
          Installed Fonts: <b>{installedFonts}</b>
        </p>
      </div>
      <div className="w-full md:w-6/12 flex justify-center items-center">
        <img
          src="/device.svg"
          alt="image"
          className="select-none pointer-events-none w-11/12"
          draggable={false}
        />
      </div>
    </div>
  );
}
