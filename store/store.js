import { configureStore } from "@reduxjs/toolkit";

import sideMenuReducer from "./slices/sideMenuSlice";
import otherProjectsSlice from "./slices/otherProjectsSlice";

// REDUX STORE
const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    otherProjects: otherProjectsSlice,
  },
});

export default store;
