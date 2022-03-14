import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import RegistrationPage from '../pages/RegistrationPage'
import LoginPage from '../pages/LoginPage'
import ContactPage from '../pages/ContactPage'

function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  )
}

export default RoutesApp