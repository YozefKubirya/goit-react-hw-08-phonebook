import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactReducer,} from "./contactSlice";
import { authReducer } from "./authSlice";

 import storage from "redux-persist/lib/storage";
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
    
const authPersistConfig = {
      key: 'auth',
      storage,
      whitelist:['token'],
    }


export const store = configureStore({
      reducer:{
      auth:persistReducer(authPersistConfig, authReducer),     
      contacts:contactReducer,
      filter:filterReducer,
      
},

middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
devTools: process.env.NODE_ENV === 'development',

})
export const persistor= persistStore(store);
