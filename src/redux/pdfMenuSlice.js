import { createSlice } from "@reduxjs/toolkit";

export const pdfMenuSlice = createSlice({
    name: "pdfMenu",
    initialState: {
        active: false
    },
    reducers: {
        togglePdf: (state) => {
            state.active = state.active === false ? true : false;
        }
    }
});

export const selectPdfMenu = state => state.pdfMenu;

export const { togglePdf } = pdfMenuSlice.actions;

export default pdfMenuSlice.reducer;