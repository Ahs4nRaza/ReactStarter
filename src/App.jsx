import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-wrapper">
      {/* You can add global layout components here like a header/sidebar */}
      <header>
        <h1>My App</h1>
      </header>

      <main>
        <Outlet /> {/* This is where child routes render */}
      </main>

      <footer>
        <small>© 2025 My App</small>
      </footer>
    </div>
  );
};

export default App;
