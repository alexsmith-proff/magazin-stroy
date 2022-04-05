import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import RegistrationPage from '../pages/RegistrationPage'
import LoginPage from '../pages/LoginPage'
import ContactPage from '../pages/ContactPage'
import CategoryPage from '../pages/CategoryPage'
import ErrorPage from '../pages/ErrorPage'
import ProductPage from '../pages/ProductPage'

function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:slugUrl" element={<CategoryPage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default RoutesApp