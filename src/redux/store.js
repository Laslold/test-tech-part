import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoriteCarsReducer from './favoriteCars/favoriteCars-slice';

const persistConfig = {
  key: 'favoriteCars',
  storage,
  whitelist: ['cars'],
};

const persistedReducer = persistReducer(persistConfig, favoriteCarsReducer);

export const store = configureStore({
  reducer: { favoriteCars: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
