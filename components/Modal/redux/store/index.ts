import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardReducer from '../slices/cardSlice';
import invoiceReducer from '../slices/invoiceSlice';
import loadingReducer from '../slices/loadingSlice';
import userReducer from '../slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  card: cardReducer,
  invoice: invoiceReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['get/customers/fulfilled', 'persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
