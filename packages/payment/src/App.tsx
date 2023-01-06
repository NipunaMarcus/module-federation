import Payment from './views/payment';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>[Remote 2] Payment</h1>
      <div className="card">
        <p>
          Test App for payment page.
        </p>
      </div>
      <>
        <Payment />
      </>
      <p className="read-the-docs">
        Module federation with Vite and React 
      </p>
    </div>
  );
}

export default App;
