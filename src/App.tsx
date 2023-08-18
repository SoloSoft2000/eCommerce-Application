import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './сomponents/Header';
import Footer from './сomponents/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/DetailedProductPage';
import UserProfilePage from './pages/UserProfilePage';
import BasketPage from './pages/BasketPage';
import AboutUsPage from './pages/AboutUsPage';
import NoPage from './pages/NoPage';
import Layout from './сomponents/Layout';
import { RootState } from './utils/reducers/store';

function App(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={customer.id ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={customer.id ? <HomePage /> : <RegisterPage />}
          />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog-all" element={<CatalogPage />} />
          <Route path="/catalog-rings" element={<CatalogPage />} />
          <Route path="/catalog-earrings" element={<CatalogPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/profile"
            element={customer.id ? <UserProfilePage /> : <NoPage />}
          />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
