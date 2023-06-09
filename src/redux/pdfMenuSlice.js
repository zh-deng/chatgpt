import { createSlice } from "@reduxjs/toolkit";

export const pdfMenuSlice = createSlice({
    name: "pdfMenu",
    initialState: {
        active: false,
        activeMessages: [],
        selectAll: false
    },
    reducers: {
        togglePdf: (state) => {
            state.active = state.active === false ? true : false;
            state.active === false ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden";
        },
        toggleSelectAll: (state) => {
            state.selectAll = state.selectAll === false ? true : false;
        },
        addActiveMessage: (state, action) => {
            state.activeMessages = [...state.activeMessages, action.payload];
            state.activeMessages.length === 1 && (state.selectAll = true);
        },
        removeActiveMessage: (state, action) => {
            let newMessages = [...state.activeMessages];
            newMessages.splice(newMessages.indexOf(action.payload), 1);
            state.activeMessages = [...newMessages];
            state.activeMessages.length === 0 && (state.selectAll = false);
        },
        removeAllMessages: (state) => {
            state.activeMessages = [];
        },
        selectAllMessages: (state, action) => {
            state.activeMessages = [...Array(action.payload).keys()].map(elem => elem++);
        },
    }
});

export const selectPdfMenu = state => state.pdfMenu;

export const { addActiveMessage, removeActiveMessage, removeAllMessages, selectAllMessages, togglePdf, toggleSelectAll } = pdfMenuSlice.actions;

export default pdfMenuSlice.reducer;