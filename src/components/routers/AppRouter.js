import { Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import { HomeScreen } from '../HomeScreen';
import { ItemsScreen } from '../ItemsScreen';
import { ItemScreen } from '../ItemScreen';
import { OrdersScreen } from '../OrdersScreen';
import { OrderScreen } from '../OrderScreen';
import { CartScreen } from '../CartScreen';
import { PaymentScreen } from '../PaymentScreen';
import { ReceiptScreen } from '../ReceiptScreen';
import { LoginScreen } from '../LoginScreen';
import { RegistrationScreen } from '../RegistrationScreen';

export const AppRouter = () => {
  return (
    <div>
        <h1>Welcome to React Router!</h1>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/items" element={<ItemsScreen />} />
            <Route path="/item" element={<ItemScreen />} />
            <Route path="/orders" element={<OrdersScreen />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/receipt" element={<ReceiptScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            
        </Routes>

    </div>
  )
}
