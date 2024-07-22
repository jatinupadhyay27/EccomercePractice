import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './Slice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  }
})