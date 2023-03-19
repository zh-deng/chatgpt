import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        dialog: [{source: "user", message: "hey"}, {source: "chatGPT", message: "hello"}],
        currentMessage: "",
        wait: false
    },
    reducers: {
        addMessage: (state, action) => {
            state.dialog = [...state.dialog, action.payload];
        },
        updateCurrentMessage: (state, action) => {
            state.currentMessage = action.payload;
        },
        toggleWait: (state) => {
            state.wait = state.wait === false ? true : false;
        }
    }
});

export const selectDialog = state => state.conversation;

export const { addMessage, toggleWait, updateCurrentMessage } = conversationSlice.actions;

export default conversationSlice.reducer;