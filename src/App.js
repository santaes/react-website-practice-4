import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Default />} />
      </Routes>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
