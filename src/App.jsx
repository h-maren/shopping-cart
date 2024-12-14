import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import {useShoppingCart, ShoppingCartProvider} from './components/ShoppingCartContext.jsx';
import ShoppingCart from './components/ShoppingCart.jsx'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <ShoppingCartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<ErrorPage />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
      <ShoppingCart />
      </ShoppingCartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
