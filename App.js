/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import StoreNavigator from './navigation/StoreNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';
import categoriesReducer from './store/reducers/categories';
import authReducer from './store/reducers/auth';
import SplashScreen from 'react-native-splash-screen';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  auth: authReducer,
});
const store = createStore(rootReducer);

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <StoreNavigator />
    </Provider>
  );
}
