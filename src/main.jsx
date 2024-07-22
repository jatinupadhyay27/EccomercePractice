import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <AppRoutes />
  </Provider>
)
