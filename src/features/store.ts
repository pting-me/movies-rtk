import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from './counter-new';
import { movieApi } from './movie/movieApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
