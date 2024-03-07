import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/user/userSlice'
import { categorySlice } from '../features/user/categorySlice'
import {movieSlice} from '../features/user/movieSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    category: categorySlice.reducer,
    movie: movieSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch