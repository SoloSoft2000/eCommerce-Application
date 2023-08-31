import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Header from './сomponents/Header';
import Footer from './сomponents/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import MainCatalogPage from './pages/MainCatalogPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/DetailedProductPage';
import UserProfilePage from './pages/UserProfilePage';
import BasketPage from './pages/BasketPage';
import AboutUsPage from './pages/AboutUsPage';
import NoPage from './pages/NoPage';
import Layout from './сomponents/Layout';

function App(): React.JSX.Element {
  const { productId } = useParams();
  console.log(productId);

  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/catalog"
            element={<MainCatalogPage title={'Enjoy Our Catalog'} />}
          />
          <Route path="/catalog/:category?" element={<CatalogPage />} />
          <Route
            path="/catalog/:category/:subcategory"
            element={<CatalogPage />}
          />

          <Route
            path="/catalog/:category/:productId"
            element={<ProductPage />}
          />
          <Route
            path="/catalog/:category?/:subcategory?/:productId?"
            element={<ProductPage />}
          />
          <Route path="/profile" element={<UserProfilePage />} />
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
