import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        <SideMenu />

        <main style={{
          marginLeft: '200px',  // Dynamic margin-left based on sidebar width
          flex: 1,
          padding: '20px',
          marginTop: '60px',
          overflowY: 'auto'  // Ensure content scrolls vertically if it overflows
        }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
