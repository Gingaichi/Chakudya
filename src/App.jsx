import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProductInfo from './pages/productInfo/ProductInfo';
import React from 'react'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SignUp from './pages/signUp/SignUp';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;