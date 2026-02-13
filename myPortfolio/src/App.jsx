import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import PortFolio from "./Components/PortFolio";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;