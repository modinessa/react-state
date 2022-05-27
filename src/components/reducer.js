import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getUsers } from "../js/server-requests.js";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
  return getUsers()
	.then((response) => response.json())
 });

export const usersSlice = createSlice({
	name: "users",
	initialState: {
			isHide: false,
			users: [],
			isSubscribed: false,
			isSubmitting: false,
	},
	extraReducers: {
      [fetchUsers.fulfilled] : (state, action) => {
        state.users = action.payload;
      }
  },
	reducers: {
		setIsHide: (state, {payload}) => {
			state.isHide = payload;
		},
		setIsSubscribed: (state, {payload}) => {
			state.isSubscribed = payload;
		},
		setIsSubmitting: (state, {payload}) => {
			state.isSubmitting = payload;
		}
	}
});

export const {setIsHide, setIsSubscribed, setIsSubmitting} = usersSlice.actions;
export default usersSlice.reducer;
