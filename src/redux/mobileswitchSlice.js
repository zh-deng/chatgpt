import { createSlice } from "@reduxjs/toolkit";

export const mobileswitchSlice = createSlice({
    name: "mobileswitch",
    initialState: {
        mobile: false
    },
    reducers: {
        switchMobile: (state) => {
            state.mobile = state.mobile === false ? true : false;
        }
    }
});

export const selectMobileswitch = state => state.mobileswitch;

export const { switchMobile } = mobileswitchSlice.actions;

export default mobileswitchSlice.reducer;