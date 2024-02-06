

import { updateMenuTools } from '@/store/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchParcel from './SerchParcel';

const Tools = () => {

  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false); // Nuevo estado


  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    // Mostrar o ocultar el filtro al abrir o cerrar el menú
    setFilterVisible(!isFilterVisible);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTool = (toolSelected: any) => {
    console.log("herramienta", toolSelected);
    dispatch(updateMenuTools(toolSelected))
  }


  return (

    <div className="fixed bottom-6 right-6 group z-[999]">
      <div
        id="speed-dial-menu"
        className={`flex flex-col items-center mb-4 space-y-2 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool(<SearchParcel/>) }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="sr-only">Busqueda de parcelas</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-green-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-green-700"
          >
          Busqueda de parcelas
          <div className="tooltip-arrow" data-popper-arrow></div>
          {/* Renderiza el componente SearchParcel condicionalmente */}
          {isFilterVisible && <SearchParcel />}
        </div>


        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool('searchCoords') }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="sr-only">Busqueda por longitud y altitud</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-green-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-green-700"
          >
          Busqueda por longitud y altitud
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>



        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool('ParcelInformation') }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
          </svg>



          <span className="sr-only">Informacion de parcela</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Informacion de parcela
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>




        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool('RecoverLocation') }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>

          <span className="sr-only">Recuperar la ubicacion</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Recuperar la ubicacion
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>


        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool('GpsLocation') }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>



          <span className="sr-only">Ubicacion Actual del gps</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Ubicacion Actual del gps
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>


        <button
          type="button"
          datatooltip-target="tooltip-print"
          datatooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          onClick={(event) => { toggleTool('Info') }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>

          <span className="sr-only">Info</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Info
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

        <span className="sr-only">Open actions menu</span>
      </button>

    </div>
  )
}
export default Tools;


