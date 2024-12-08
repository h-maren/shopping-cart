import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<ErrorPage />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
