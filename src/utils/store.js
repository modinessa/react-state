import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/reducer";

export const store = configureStore({
	reducer: {
		users: usersReducer,
	}
});