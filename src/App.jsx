import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Work from "./components/works";
import "./index.css";
import Bio from "./components/bio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Work />
      <Bio />
    </BrowserRouter>
  );
}

export default App;
