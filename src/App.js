import {BrowserRouter} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
