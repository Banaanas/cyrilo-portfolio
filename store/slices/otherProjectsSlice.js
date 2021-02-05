import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  showOtherProjects: false,
};

// SIDE MENU SLICE
const otherProjectsSlice = createSlice({
  name: "OtherProjects",
  initialState,
  reducers: {
    toggleOtherProjects: (state, action) => {
      state.showOtherProjects = !state.showOtherProjects;
    },
  },
});

export default otherProjectsSlice.reducer;
export const { toggleOtherProjects } = otherProjectsSlice.actions;
