import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		data : [],
		loading: false,
		error: null,
		roomNo : null
	},
	reducers: {
		setData(state, action) {
			state.data = action.payload;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		}
		
	},
});
export const { setData,setLoading } = dataSlice.actions;
export default dataSlice.reducer;