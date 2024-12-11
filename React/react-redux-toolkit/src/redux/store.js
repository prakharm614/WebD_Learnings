import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

//steps:
// create store
// wrap app component under Provider so that store is accesible to all app eles
// create Slice
// register reducer in store