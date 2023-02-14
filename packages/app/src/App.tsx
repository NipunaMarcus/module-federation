import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/navigationBar';

function App() {

  return (
    <div className="App">
      <h1>[Host Application] Welcome to the Shop!</h1>
      <BrowserRouter>
        <Navigation />
        <div className="card">
          <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path='/home' element={
              <div>Home Coming Soon...</div>
            } />
            <Route path='/payment' element={
              <div>Payment coming Soon...</div>
            }/>
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
