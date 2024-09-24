import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    data: [],
    roomNo: 0,
    ok: false,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setRoomNo(state, action) {
      state.roomNo = action.payload;
    },
    ok(state) {
      state.ok = !state.ok;
    },
  },
});
export const { setData, setRoomNo,ok } = dataSlice.actions;
export default dataSlice.reducer;
