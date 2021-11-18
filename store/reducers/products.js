/* eslint-disable prettier/prettier */
import {PRODUCTS} from '../../data/dummy-data';

const initialState = {
  products: PRODUCTS,
  popularFoods: PRODUCTS.filter(product => product.isPopular === true),
  bestFoods: PRODUCTS.filter(product => product.isBestFood === true),
};

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
