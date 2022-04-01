import React from 'react';

import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
