import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getUsers } from "../utils/server-requests";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
		return getUsers()
		.then((response) => response.json())
 }
);

//const isSubscribed = localStorage.getItem('isSubscribed') === 'true';

const isHide = localStorage.getItem('isHide') === 'true';

export const usersSlice = createSlice({
	name: "users",
	initialState: {
			isHide,
			users: [],
			isSubscribed: false,
			isSubmitting: false,
			user: null,
	},
	extraReducers: {
      [fetchUsers.fulfilled]: (state, {payload}) => {
        state.users = payload;
      },
  },
	reducers: {
		setIsHide: (state, {payload}) => {
			state.isHide = payload;
			localStorage.setItem('isHide', payload);
		},
		setIsSubscribed: (state, {payload}) => {
			state.isSubscribed = payload;
			localStorage.setItem('isSubscribed', payload);
		},
		setIsSubmitting: (state, {payload}) => {
			state.isSubmitting = payload;
		},
		setUser: (state, {payload}) => {
			state.user = payload;
		},
	}
});

export const {
	setIsHide,
	setIsSubscribed, 
	setIsSubmitting,
	setUser,
} = usersSlice.actions;
export default usersSlice.reducer;
