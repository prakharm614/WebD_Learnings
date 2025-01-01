import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    add: (state,action) => {
    },
    update: (state,action) => {
      
    },
   reset: (state, action) => {

    },
    remove :(state,action) =>{

    },
  },
})

// Action creators are generated for each case reducer function
export const { sdd,update,reset , remove } = pasteSlice.actions

export default pasteSlice.reducer