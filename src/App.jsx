import "./styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
