import { combineReducers, configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { getBooksApi } from '../entites/api/getBooks';
import searchReducer from '../components/SearchBar/redux/SearchSlice'

const rootReducer = combineReducers({
  [getBooksApi.reducerPath]: getBooksApi.reducer,
  searchApi:searchReducer
});

export const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getBooksApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof configureAppStore>['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
