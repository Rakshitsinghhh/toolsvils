import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f9fc;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </AppContainer>
  );
};

export default App; 