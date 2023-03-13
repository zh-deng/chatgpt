import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from "./conversationSlice";
import behaviourToggleReducer from "./behaviourToggleSlice";
import mobileswitchReducer from "./mobileswitchSlice";
import pdfMenuReducer from "./pdfMenuSlice";
import wikiToggleReducer from "./wikiToggleSlice";

export const store = configureStore({
	reducer: {
		behaviourToggle: behaviourToggleReducer,
		conversation: conversationReducer,
		mobileswitch: mobileswitchReducer,
		pdfMenu: pdfMenuReducer,
		wikiToggle: wikiToggleReducer
	},
});
