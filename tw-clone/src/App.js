import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Homeleft from "./Pages/Homeleft"


function App() {
  return (
    <Router>
    <div className="App">
      <Homeleft/>
      <Routes>
        <Route path="/home" 
          element={[<Home/>]}/>

        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
