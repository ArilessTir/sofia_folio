import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import "./index.css";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
