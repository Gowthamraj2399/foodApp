/* eslint-disable prettier/prettier */
import {CATEGORIES} from '../../data/dummy-data';

const initialState = {
  categories: CATEGORIES,
};

const categoriesReducer = (state = initialState, action) => {
  return state;
};

export default categoriesReducer;
