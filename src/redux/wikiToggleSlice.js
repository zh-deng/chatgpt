import { createSlice } from "@reduxjs/toolkit";

export const wikiToggleSlice = createSlice({
    name: "wikiToggle",
    initialState: {
        wikiToggle: false,
        selected: 0,
        wikiText: "Loading..."
    },
    reducers: {
        toggleDropdown: (state) => {
            state.wikiToggle = state.wikiToggle === false ? true : false;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
            state.wikiToggle = false;
        },
        setWikiText: (state, action) => {
            state.wikiText = action.payload;
        },
    }
});

export const selectWikiToggle = state => state.wikiToggle;

export const { toggleDropdown, setSelected, setWikiText } = wikiToggleSlice.actions;

export default wikiToggleSlice.reducer;