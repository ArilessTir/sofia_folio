import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import "./index.css";
import Home from "./pages/home";
import Rsbar from "./components/rsBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section className="flex justify-center">
        <div>
          <Home />
        </div>
        <Rsbar />
      </section>
    </BrowserRouter>
  );
}

export default App;
