import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from "./conversationSlice";
import behaviourToggleReducer from "./behaviourToggleSlice";

export const store = configureStore({
	reducer: {
		conversation: conversationReducer,
		behaviourToggle: behaviourToggleReducer
	},
});
