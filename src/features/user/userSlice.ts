import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userState {
  isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: userState = {
    isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  // `userSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.isLoggedIn = false
    }
  },
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer