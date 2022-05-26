import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
	name: "users",
	initialState: {
			isHide: false,
			users: [],
			isSubscribe: false,
	},
	reducers: {
		setIsHide: (state, {payload}) => {
			state.isHide = payload;
		},
		setUsers: (state, {payload}) => {
			state.users = payload;
		}
	}
});

export const {setIsHide, setUsers} = usersSlice.actions;
export default usersSlice.reducer;
