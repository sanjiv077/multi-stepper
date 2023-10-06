import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./context/AppContext"; 
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <AppProvider> 
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
