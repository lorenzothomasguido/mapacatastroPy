
import React, { useState } from 'react';

const MapViews = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (

    <div data-dial-init className="fixed flex end-24 bottom-6 group ">
      <div
        id="speed-dial-menu-square"
        className={`flex items-center me-4 space-x-2 rtl:space-x-reverse ${isMenuOpen ? 'block' : 'hidden'}`}
      >

        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative">
          <img
            src="https://catastro.adevcom.cl/imgs/mapa/maprequest.png"
            alt="Mapa"
            className="w-full h-full object-cover rounded-lg" />
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative">
          <img
            src="https://catastro.adevcom.cl/imgs/mapa/openstreetmap.png"
            alt="Mapa"
            className="w-full h-full object-cover rounded-lg" />
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative">
          <img
            src="https://catastro.adevcom.cl/imgs/mapa/satelital.png"
            alt="Mapa"
            className="w-full h-full object-cover rounded-lg" />
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative">
          <img
            src="https://mapascordoba.gob.ar/viewer/images/WorldImagery.jpeg"
            alt="Mapa"
            className="w-full h-full object-cover rounded-lg" />
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>



      </div>
      <button
        type="button"
        onClick={handleToggleMenu}
        aria-controls="speed-dial-menu"
        aria-expanded={isMenuOpen}
        className="flex items-center justify-center text-white bg-green-800 rounded-lg w-14 h-14 hover:bg-green-800 focus:ring-4 focus:outline-none dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>

        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  )
}
export default MapViews;



