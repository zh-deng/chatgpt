import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: "conversation",
    initialState: {
        dialog: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.dialog.push(action.payload);
        }
    }
});

export const selectDialog = state => state.conversation;

export const { addMessage } = conversationSlice.actions;

export default conversationSlice.reducer;