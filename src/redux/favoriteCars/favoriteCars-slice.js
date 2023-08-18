import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};
const favoriteCarsReducer = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    add: {
      reducer: (store, { payload }) => {
        return { ...store, cars: [...store.cars, payload] };
      },
    },

    remove: (store, { payload }) => {
      return {
        ...store,
        cars: store.cars.filter(item => item.id !== payload),
      };
    },
  },
});
export const { add, remove } = favoriteCarsReducer.actions;
export default favoriteCarsReducer.reducer;
