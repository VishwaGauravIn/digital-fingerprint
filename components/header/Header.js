import React from "react";

export default function Header() {
  return (
    <div className="w-full flex items-center relative justify-between">
      <span className="flex items-center">
        <img src="/logo_sm.png" alt="" className="w-6 sm:w-8 h-6 sm:h-8 mr-2" />
        <p className="text-2xl sm:text-4xl font-medium text-malibu-400">df</p>
      </span>

      <a
        href="https://www.buymeacoffee.com/VishwaGauravIn"
        className="flexjustify-center items-center p-2 px-6 bg-malibu-300 text-malibu-900 font-semibold rounded-full shadow-lg hover:shadow-malibu-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100 outline-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate us
      </a>
    </div>
  );
}
