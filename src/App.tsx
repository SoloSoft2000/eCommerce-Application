import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './_components/Header';
import Footer from './_components/Footer';
import HomePage from './_pages/HomePage';
import LoginPage from './_pages/auth/LoginPage';
import RegisterPage from './_pages/auth/RegisterPage';
import CatalogPage from './_pages/CatalogPage';
import ProductPage from './_pages/DetailedProductPage';
import UserProfilePage from './_pages/UserProfilePage';
import BasketPage from './_pages/BasketPage';
import AboutUsPage from './_pages/AboutUsPage';
import NoPage from './_pages/NoPage';
import Layout from './_components/Layout';
import { RootState } from './utils/reducers/store';

function App(): React.JSX.Element {
  const customer = useSelector((state: RootState) => state.customer);

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
          <Route
            path="/profile"
            element={customer.id ? <UserProfilePage /> : <NoPage />}
          />
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
