import { createSlice } from "@reduxjs/toolkit";

export const behaviourToggleSlice = createSlice({
    name: "behaviourToggle",
    initialState: {
        behaviourToggle: false,
        selected: 0
    },
    reducers: {
        toggleDropdown: (state) => {
            state.behaviourToggle = state.behaviourToggle === false ? true : false;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
            state.behaviourToggle = false;
        },
    }
});

export const selectBehaviourToggle = state => state.behaviourToggle;

export const { toggleDropdown, setSelected } = behaviourToggleSlice.actions;

export default behaviourToggleSlice.reducer;