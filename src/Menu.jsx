import Tareas from "./Tareas";
import SobreNosotros from "./SobreNosotros";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Menu = () => {
    return (
      <Router>
        <div>
          <h1>Menu</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tareas">Tareas</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li>
          </ul>
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default Menu;