import { createSlice } from "@reduxjs/toolkit";

export const createAll = createSlice({
  name: "all",
  initialState: {
    users: [
      { name: "Abrorjon", age: 18, year: "2022-02-03" },
      { name: "Salohiddin", age: 18, year: "2022-05-10" },
      { name: "Fozil", age: 18, year: "2022-09-10" }, //
      { name: "Bekzodjon", age: 18, year: "2022-01-10" },
      { name: "Durdona", age: 18, year: "2022-06-10" },
      { name: "Nigora", age: 18, year: "2022-07-10" },
      { name: "Mahliyo", age: 18, year: "2022-02-10" }, //
      { name: "Bosithon", age: 18, year: "2022-06-10" },
      { name: "Ibrohim", age: 18, year: "2022-08-10" },
      { name: "G'iyosiddin", age: 18, year: "2022-09-10" },
      { name: "Abboshon", age: 18, year: "2022-05-10" },
      { name: "Muhammad Aziz", age: 18, year: "2022-12-10" },
    ],
  },
  reducers: {
    dateFilAc: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { dateFilAc } = createAll.actions;
export default createAll.reducer;
