import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './component/Login';
import Headers from './component/Header.js';
function App() {
  return (
    <div className="App">
  <Router>
    <Headers/>
   <Routes>
     <Route path = '/' element={<Login />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
