import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../features/users/usersSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import { pupsReducer } from '../features/pups/pupsSlice';
import { ordersReducer } from '../features/orders/ordersSlice';

const usersPersistConfig = {
  key: 'techGear:users',
  storage: storage,
};

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, usersReducer),
  pups: pupsReducer,
  orders: ordersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
