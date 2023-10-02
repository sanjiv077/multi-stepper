import {BrowserRouter, Routes , Route} from "react-router-dom"

import './App.css';
import Home from './Pages/Home';
import PersonalInfo from "./Pages/PersonalInfo";
import Plan from "./Pages/Plan";
import Addons from "./Pages/Addons";
import Summary from "./Pages/Summary";
import ThankYou from "./Pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      {/* <Routes>
        <Route path="/" element={<PersonalInfo />}/>
        <Route path="/plan" element={<Plan />}/>
        <Route path="/addons" element={<Addons />}/>
        <Route path="/summary" element={<Summary />}/>
      </Routes> */}
      <ThankYou />
    </div>
    </BrowserRouter>
  );
}

export default App;
