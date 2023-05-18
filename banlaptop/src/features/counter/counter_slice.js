import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    tang: (state,action) => {
      state.value += action.payload.value
    },
    giam: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload.value
    },

  },
})

// Action creators are generated for each case reducer function
export const { tang, giam, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer