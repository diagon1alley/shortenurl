import { configureStore } from '@reduxjs/toolkit';
import setterReducer  from './setter'

export const store = configureStore({
  reducer: {
    setter: setterReducer
  },
});
