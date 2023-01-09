import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filterReducer,
  },
});
