import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Libros from "./components/Libros";
import Socios from "./components/Socios";
import Editorial from "./components/Editorial";
import Estado from "./components/Estado";
import Prestamos from "./components/Prestamos";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link> | 
                <Link to="/libros">Libros</Link> | 
                <Link to="/socios">Socios</Link> | 
                <Link to="/editoriales">Editoriales</Link> | 
                <Link to="/estados">Estados</Link> | 
                <Link to="/prestamos">Préstamos</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Bienvenido a la Biblioteca Aleph</h1>} />
                <Route path="/libros" element={<Libros />} />
                <Route path="/socios" element={<Socios />} />
                <Route path="/editoriales" element={<Editorial />} />
                <Route path="/estados" element={<Estado />} />
                <Route path="/prestamos" element={<Prestamos />} />
            </Routes>
        </Router>
    );
}

export default App;
