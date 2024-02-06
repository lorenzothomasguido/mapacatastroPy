
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './SearchParcel.css'; // Importa el archivo de estilos CSS


// Definir columnas y filas de ejemplo para el DataGrid
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number' },
];

const rows: GridRowsProp = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 25 },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 36 },
  // Agrega más filas según tus necesidades
];


// Componente principal
function SearchParcel() {
  const dispatch = useDispatch();

  // Estados para almacenar la información seleccionada
  const [tipoInmueble, setTipoInmueble] = useState('Departamentos');
  const [departamento, setDepartamento] = useState('Distrito1');
  const [distrito, setDistrito] = useState('DistritoA');
  const [padron, setPadron] = useState('');

  // Función para manejar el filtrado
  const filtrarParcelas = () => {
    // Implementa la lógica de filtrado según tus necesidades
    // Puedes utilizar los estados tipoInmueble, departamento, distrito y padron
  };

  // Estado y función para manejar la visibilidad de la columna ID en el DataGrid
  const [showIdColumn, setShowIdColumn] = useState(true);

  return (
    <Box className="search-parcel-container">

      <div className="search-controls">
        <h1 className="title-highlight">Buscar Parcelas</h1>

        <label>Tipo de Inmueble:</label>
        <select value={tipoInmueble} onChange={(e) => setTipoInmueble(e.target.value)}>
          <option value="Departamentos">Departamentos</option>

        </select>

        <br />

        <label>Departamento:</label>
        <select value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
          <option value="Distrito1">Distrito 1</option>

        </select>

        <br />

        <label>Distrito:</label>
        <select value={distrito} onChange={(e) => setDistrito(e.target.value)}>
          <option value="DistritoA">Distrito A</option>
        </select>

        <br />

        <label>Padrón:</label>
        <input type="text" value={padron} onChange={(e) => setPadron(e.target.value)} />

        <br /><br />

        <button onClick={filtrarParcelas}>Buscar Parcelas</button>
      </div>

      <FormControlLabel
        checked={showIdColumn}
        onChange={() => setShowIdColumn(!showIdColumn)}
        control={<Switch color="primary" size="small" />}
        label="Mostrar columna ID"
      />

      <Box sx={{ height: 400 }}>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={{ items: [], quickFilterExcludeHiddenColumns: true, quickFilterValues: [] }}
          columnVisibilityModel={{ id: showIdColumn }}
        />
      </Box>
    </Box>
  );
}

export default SearchParcel;

