import './App.css';
import React, { Suspense } from 'react';

// Import remote modules using lazy loading.
// Use them inside the app component.
const Home = React.lazy(() => import('homepage/Home'));
const Button = React.lazy(() => import('homepage/Button'));

function App() {
  return (
    <div className="App">
      <h1>[Host Application] Welcome to the Shop!</h1>
      <div className='navBar'>
        <div>
          <Suspense fallback={<div>Loading...</div>} >
            <Button caption="Home" />
          </Suspense>
        </div>
      </div>
      <div className="card">
        <Suspense fallback={<div>Loading...</div>} >
          <Home />
        </Suspense>
        <p>
          Test App for host application.
        </p>
      </div>
      <p className="read-the-docs">
        Module federation with Vite and React
      </p>
    </div>
  )
}

export default App;
