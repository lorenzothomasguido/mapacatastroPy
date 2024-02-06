import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'globalApp',
    initialState:{
        menuActive:'Filtros',
        lateralBarActive:false,
        SearchParcel:false,
        SearchCoords:false,
    },
    reducers:{
        updateMenuTools:(state,action) => {
            state.menuActive = action.payload;
        },
        openLateralBar:(state,action) => {
            state.lateralBarActive = !action.payload;
        },
        toggleSearchParcel:(state,action) => {
            state.SearchParcel = !action.payload;
        },
        openSearchCoords:(state,action) => {
            state.SearchCoords = !action.payload;
        }
    }
});


export const {updateMenuTools,openLateralBar,toggleSearchParcel,openSearchCoords} = Slice.actions;