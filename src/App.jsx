import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet /> {/* This is where child routes render */}
      </main>

      <Footer />
    </>
  );
};

export default App;
