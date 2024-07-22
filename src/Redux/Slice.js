import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  sidebarData: [
    {
      id: 1,
      title: "Home",
      route: "/",
    },
    {
      id: 2,
      title: "Mens",
      route: "/Mens",
    },
    {
      id: 3,
      title: "Contact",
      route: "/contact",
    },
  ],
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    setSidebarData: (state = initialState, action) => {
        switch (action.type) {
          case 'SET_SIDEBAR_DATA':
            return {
              ...state,
              sidebarData: action.payload,
            };
          // other cases
          default:
            return state;
        }
      },
  },
});

export const { setSidebarData } = sidebarSlice.actions;
export default sidebarSlice.reducer;