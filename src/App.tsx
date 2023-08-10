import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/DetailedProductPage';
import UserProfilePage from './pages/UserProfilePage';
import BasketPage from './pages/BasketPage';
import AboutUsPage from './pages/AboutUsPage';
import NoPage from './pages/NoPage';
import Layout from './components/Layout';

function App(): React.JSX.Element {
  return (
    <>
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Layout>
    </>
  );
}

export default App;
