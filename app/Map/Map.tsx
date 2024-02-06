
"use client";
import Map, { NavigationControl, GeolocateControl, Source, Layer, FillLayer, SymbolLayer, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PopupInfo from "@/components/popupInfo/popupInfo";
import { ParamsPopup } from "@/app/types/MapTypes";
import mapboxgl from 'mapbox-gl';

import { useState, useMemo, useCallback, useRef } from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import classes from "@/app/Page.module.css";
import React from 'react';
import '../globals.css';





const layerStyle: FillLayer = {
  id: 'visor_catastro:subido_qxtdjq6hkc4m',
  type: 'fill',
  paint: {
    "fill-color": ['case',
      ['==', ['get', 'zona'], 0],
      "rgba(166, 204, 131,0.5)",
      "rgba(206, 127, 62,0.5)"
    ],
    "fill-outline-color": ['case',
      ['==', ['get', 'zona'], 0],
      "rgba(166, 204, 131,1)",
      "rgba(206, 127, 62,1)"
    ],
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      1,
      0.5
    ]
  },
  "source-layer": 'subido_qxtdjq6hkc4m',
};

const labelStyle: SymbolLayer = {
  "id": "parcel_label",
  "type": "symbol",
  "source-layer": "subido_qxtdjq6hkc4m",
  "layout": {
    'text-field': ['case',
      ['!=', ['get', 'zona'], 0],
      ['format', ['get', 'zona'], { 'font-scale': 0.8 }, '-', { 'font-scale': 0.8, }, ['get', 'mz'], { 'font-scale': 0.8 }, '-', { 'font-scale': 0.8, }, ['get', 'lote'], { 'font-scale': 0.8 }],
      ['get', 'padron']
    ],
    'text-font': ["Lato Bold"],
    'text-size': {
      "base": 1,
      "stops": [
        [12, 12],
        [16, 16]
      ]
    },
    "text-padding": 3,
    "text-letter-spacing": 0.1,
    "text-max-width": 7,
    "text-transform": "uppercase",
    "text-variable-anchor": ['center'],
    "text-justify": 'center',
    "text-optional": false
  },
  "paint": {
    "text-color": "#333",
    "text-halo-color": "hsl(0, 0%, 100%)",
    "text-halo-width": 1.5,
    "text-halo-blur": 1
  },
  "minzoom": 8,
  "maxzoom": 20

  //"filter": ['!=','zona',0]
}
const highlightLayer: FillLayer = {
  id: 'parcels-highlighted',
  type: 'fill',
  source: 'visor_catastro:subido_qxtdjq6hkc4m',
  'source-layer': 'subido_qxtdjq6hkc4m',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.75
  }
};

function MapaCatastro() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const [popupInfo, setPopupInfo] = useState<ParamsPopup>(null);

  const popupRef = useRef<mapboxgl.Popup>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const onNavLinkClick = () => {
    // Cierra el menú cuando se hace clic en un enlace del menú
    closeMenu();
  };

  //const [showPopup, setShowPopup] = useState<boolean>(false);

  // const onHover = useCallback((event) => {
  //   const county = event.features && event.features[0];
  //   setHoverInfo({
  //     longitude: event.lngLat.lng,
  //     latitude: event.lngLat.lat,
  //     parcel: county && county.properties.id_parcela
  //   });
  // }, []);

  const onClick = useCallback((e: { features: any[]; lngLat: { lng: any; lat: any; }; }) => {
    const parcel = e.features && e.features[0];
    //setShowPopup(true);

    setPopupInfo({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      parcel: parcel && parcel.properties.id_parcela
    })
    console.log("click map ", e.features, showPopup);

  }, [])

  const onClosePopup = () => {
    console.log("popup close!");
    setPopupInfo(null);
  }

  const selectedParcel = (popupInfo && popupInfo.parcel) || '';
  const showPopup = useMemo(() => { return selectedParcel != '' ? true : false }, [selectedParcel])
  console.log("selectedParcel", selectedParcel, showPopup);

  //const selectedCounty = (hoverInfo && hoverInfo.parcel) || '';

  const filter = useMemo(() => ['==', 'id_parcela', selectedParcel], [selectedParcel]);

  const urltiles: string[] = [
    'https://catastro.adevcom.cl/geoserver/visor_catastro/gwc/service/tms/1.0.0/visor_catastro:subido_qxtdjq6hkc4m@EPSG:900913@pbf/{z}/{x}/{y}.pbf'];

  return (

    <main className={classes.mainStyle}>

      <Map

        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: "100%", height: "100%" }}
        initialViewState={{ latitude: -23.45, longitude: -58.05, zoom: 5 }}
        maxZoom={20}
        minZoom={3}
        //onMouseMove={onHover}
        onClick={onClick}
        interactiveLayerIds={['visor_catastro:subido_qxtdjq6hkc4m']}
      >
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 0 }}>
          <GeolocateControl />
          <NavigationControl />
        </div>
        <Source id="my-data" type="vector" tiles={urltiles} minzoom={3} maxzoom={20} scheme="tms">
          <Layer {...labelStyle} />
          <Layer beforeId='parcel_label' {...layerStyle} />
          <Layer beforeId='parcel_label' {...highlightLayer} filter={filter} />
        </Source>
        {showPopup && (
          <Popup
            ref={popupRef}
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            offset={[0, -10]}
            onClose={onClosePopup}
            closeButton={true}
            closeOnClick={false}
            className="popup-info"
          >
            <PopupInfo idParcela={selectedParcel} />
          </Popup>
        )}
      </Map>
    </main>
  );
}
export default MapaCatastro
