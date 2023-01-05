import Home from './views/home';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>[Remote 1] Home Page</h1>
      <div className="card">
        <p>
          Test App for home page.
        </p>
      </div>
      <>
        <Home />
      </>
      <p className="read-the-docs">
        Module federation with Vite and React 
      </p>
    </div>
  );
}

export default App;
