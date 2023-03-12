import { createSlice } from "@reduxjs/toolkit";

export const wikiToggleSlice = createSlice({
    name: "wikiToggle",
    initialState: {
        wikiToggle: false,
        selected: 0
    },
    reducers: {
        toggleDropdown: (state) => {
            state.wikiToggle = state.wikiToggle === false ? true : false;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
            state.wiki = false;
        },
    }
});

export const selectDropdown = state => state.wikiToggle;

export const { toggleDropdown, setSelected } = wikiToggleSlice.actions;

export default wikiToggleSlice.reducer;