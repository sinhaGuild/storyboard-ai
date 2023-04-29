import inputReducer from '@/features/input/inputSlice'
import sbReducer from '@/features/storyboard/storyboardSlice'
import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
    reducer: {
        storyboard: sbReducer,
        input: inputReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch