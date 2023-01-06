import './App.css';
import React, { Suspense, useEffect } from 'react';
import { ExtendedWindow } from 'types';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/navigationBar';

// Import remote modules using lazy loading.
// Use them inside the app component.
const Home = React.lazy(() => import('homepage/Home'));
const Payment = React.lazy(() => import('payment/Payment'));

declare let window: ExtendedWindow;

function App() {
  
  useEffect(() => {
    // This is not as elegant as production code as we cannot use such in production.
    // But lets assume these envs are coming from a environment handler.
    // And this is only for sample case.
    if (import.meta.env.VITE_PAYMENT_URL) {
      // This is where we set the payment remote's URL.
      window.paymentUrl = import.meta.env.VITE_PAYMENT_URL;
    }
  }, []);

  return (
    <div className="App">
      <h1>[Host Application] Welcome to the Shop!</h1>
      <BrowserRouter>
        <Navigation />
        <div className="card">
          <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path='/home' element={
              <Suspense fallback={<div>Loading...</div>} >
                <Home />
              </Suspense>
            } />
            <Route path='/payment' element={
              <Suspense fallback={<div>Loading...</div>} >
                <Payment />
              </Suspense>
            } />
          </Routes>
          <p>
            Test App for host application.
          </p>
        </div>
      </BrowserRouter>
      <p className="read-the-docs">
        Module federation with Vite and React
      </p>
    </div>
  )
}

export default App;
