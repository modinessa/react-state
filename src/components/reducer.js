import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getUser, getUsers } from "../utils/server-requests";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
		return getUsers()
			.then((response) => response.json())
 }
);

export const fetchUser = createAsyncThunk(
	'users/fetchUser',
	async (id) => {
		return getUser(id)
			.then((response) => response.json());
	}
)

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
			userNotFound: false,
	},
	extraReducers: {
      [fetchUsers.fulfilled]: (state, {payload}) => {
        state.users = payload;
      },
			[fetchUser.fulfilled]: (state, {payload}) => {
				state.user = payload;
				state.userNotFound = false;
			},
			[fetchUser.rejected]: (state) => {
				state.user = null;
				state.userNotFound = true;
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
	}
});

export const {
	setIsHide,
	setIsSubscribed, 
	setIsSubmitting,
} = usersSlice.actions;
export default usersSlice.reducer;
