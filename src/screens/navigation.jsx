import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartScreen } from './cart';
import { CheckoutScreen } from './checkout';
import { HistoryScreen } from './history';
import { HomeScreen } from './home';
import { NotFoundScreen } from './not-found';
import { LoginScreen } from './oauth/login';
import { StoreScreen } from './store';

export const Navigation = () => {
  <Routes>
    <Route path="/oauth/login" element={<LoginScreen></LoginScreen>}></Route>
    <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
    <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
    <Route path="/checkout" element={<CheckoutScreen></CheckoutScreen>}></Route>
    <Route path="*" element={<NotFoundScreen></NotFoundScreen>}></Route>
    <Route path="/history" element={<HistoryScreen></HistoryScreen>}></Route>
    <Route path="/store" element={<StoreScreen></StoreScreen>}></Route>
  </Routes>;
};
