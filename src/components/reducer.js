import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
	name: "users",
	initialState: {
			isHide: false,
			users: [],
			isSubscribed: false,
	},
	reducers: {
		setIsHide: (state, {payload}) => {
			state.isHide = payload;
		},
		setUsers: (state, {payload}) => {
			state.users = payload;
		},
		setIsSubscribed: (state, {payload}) => {
			state.isSubscribed = payload;
		}
	}
});

export const {setIsHide, setUsers, setIsSubscribed} = usersSlice.actions;
export default usersSlice.reducer;
