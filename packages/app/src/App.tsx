import './App.css';

// Import remote modules using static imports.
// Use them inside the app component.
import Home from 'homepage/Home';
import Button from 'homepage/Button';

function App() {
  return (
    <div className="App">
      <h1>[Host Application] Welcome to the Shop!</h1>
      <div className='navBar'>
        <div>
          <Button caption="Home" />
        </div>
      </div>
      <div className="card">
        <Home />
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
