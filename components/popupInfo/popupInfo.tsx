import React from "react";


export default function PopupInfo({idParcela}:Readonly<{idParcela:string}>) {
    return <div>
            <h3>Datos del Padrón</h3>
                <ul className="dl-horizontal">
                    <li>Parcela: {idParcela}</li>
                    <li>Departamento: PTE. HAYES</li>
                    <li>Distrito: VILLA HAYES</li>
                    <li>Padrón: 1905</li>
                    <li>Finca: 794</li>
                    <li>Fecha Inscripción:<span>5/6/2022</span></li>
                    <li>Situación: </li>
                    <li>Hectáreas: <span>11.718</span> Ha.</li>
                    <li>Metros Cuadrados: <span>1.587</span> m<sup>2</sup></li>
                    <li>Valor Oficial: <span>6.315.782.867</span> Gs.</li>
                </ul>
            </div>    
    
}