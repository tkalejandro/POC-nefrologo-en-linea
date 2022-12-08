import { configureStore } from '@reduxjs/toolkit'
import { bookingPageReducer, userReducer } from './slices'
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingPageReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch