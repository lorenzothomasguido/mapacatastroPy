


import React from 'react';
import './SerchParcel'; // Importa tus estilos CSS


const SerchParcel = () => {
  return (
    <div id="filtercontainer">
      <div id="title-container">
        <h2 className="title">Filtros</h2>
      </div>
      <div id="toggle-container">
        <p className="texto">Buscar parcelas por cuenta corriente o padrón</p>
        <div id="toggles">
          <p className="texto" id="subtitul-uno">Seleccione el tipo de inmueble.</p>
        </div>
        <div id="select-container">
          <div className="styles-select">
            <label htmlFor="departamento">Departamento</label>
            <select name="" id="" disabled={true}></select>
            <p className="texto">Seleccione el departamento donde se encuentra ubicado el inmueble.</p>
          </div>
          <div className="styles-select">
            <label htmlFor="distritos">distritos</label>
            <select name="" id="" disabled={true}></select>
            <p className="texto">Seleccione el distrito donde se encuentra ubicado el inmueble.</p>
          </div>
          <div className="styles-select">
            <label htmlFor="padron">Padron</label>
            <select name="" id="" disabled={true}></select>
            <p className="texto">El número de padrón de la cuenta rural.</p>
          </div>
          <div id="btn-container">
            <div id="three-selects-container">
              <div className="styles-select">
                <label htmlFor="zona">Zona</label>
                <select name="" id="" disabled={true}></select>
                <p className="texto">La zona correspondiente del inmueble.</p>
              </div>
              <div className="styles-select">
                <label htmlFor="manzana">Manzana</label>
                <select name="" id="" disabled={true}></select>
                <p className="texto">La zona de la manzana del inmueble.</p>
              </div>
              <div className="styles-select">
                <label htmlFor="lote">Lote</label>
                <select name="" id="" disabled={true}></select>
                <p className="texto">El número de lote del inmueble.</p>
              </div>
            </div>
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerchParcel;
