import Header from './components/header/header';
import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout';
import Login from './pages/login/login';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login" 
            element={<Login />}
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
