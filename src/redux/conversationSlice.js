import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        dialog: [
            {source: "user", message: "Heyho, wie geht es dir? Heyho, wie geht es dir? "},
            {source: "chatGPT", message: "Gutso"},
            {source: "user", message: "Was geht"},
            {source: "chatGPT", message: "Klappts"},
            {source: "user", message: "Ja"},
            {source: "chatGPT", message: "Schön"},
            {source: "user", message: "Ja"},
            {source: "chatGPT", message: "Schön"},
            {source: "user", message: "Ja"},
            {source: "chatGPT", message: "Schön"},
        ],
        currentMessage: ""
    },
    reducers: {
        addMessage: (state, action) => {
            state.dialog = [...state.dialog, action.payload];
        },
        updateCurrentMessage: (state, action) => {
            state.currentMessage = action.payload;
        }
    }
});

export const selectDialog = state => state.conversation;

export const { addMessage, updateCurrentMessage } = conversationSlice.actions;

export default conversationSlice.reducer;