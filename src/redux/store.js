import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from "./conversationSlice";
import behaviourToggleReducer from "./behaviourToggleSlice";
import mobileswitchReducer from "./mobileswitchSlice";
import wikiToggleReducer from "./wikiToggleSlice";

export const store = configureStore({
	reducer: {
		behaviourToggle: behaviourToggleReducer,
		conversation: conversationReducer,
		mobileswitch: mobileswitchReducer,
		wikiToggle: wikiToggleReducer
	},
});
