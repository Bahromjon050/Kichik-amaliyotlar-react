import { createSlice } from "@reduxjs/toolkit";

export const createAll = createSlice({
  name: "all",
  initialState: {
    users: [
      { name: "Abrorjon", age: 18, year: "05-02-2022" },
      { name: "Salohiddin", age: 18, year: "05-08-2022" },
      { name: "Fozil", age: 18, year: "05-05-2022" }, //
      { name: "Bekzodjon", age: 18, year: "05-01-2022" },
      { name: "Durdona", age: 18, year: "05-06-2022" },
      { name: "Nigora", age: 18, year: "05-03-2022" },
      { name: "Mahliyo", age: 18, year: "05-07-2022" }, //
      { name: "Bosithon", age: 18, year: "05-03-2022" },
      { name: "Ibrohim", age: 18, year: "05-10-2022" },
      { name: "G'iyosiddin", age: 18, year: "05-01-2022" },
      { name: "Abboshon", age: 18, year: "05-02-2022" },
      { name: "Muhammad Aziz", age: 18, year: "05-12-2022" },
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
