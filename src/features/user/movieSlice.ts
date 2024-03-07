import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Movie {
  id: number | null,
}

// Define the initial state using that type
const initialState: Movie = {
    id: null,
}

export const movieSlice = createSlice({
  name: 'movie',
  // `movieSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<number>): void => {
        state.id = action.payload
    }
  },
})

export const { setMovie } = movieSlice.actions

export default movieSlice.reducer