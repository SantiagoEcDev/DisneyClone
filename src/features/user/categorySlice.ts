import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Category {
  name: string | null
}

// Define the initial state using that type
const initialState: Category = {
    name: null
}

export const categorySlice = createSlice({
  name: 'category',
  // `categorySlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>): void => {
        state.name = action.payload.name
    }
  },
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer