import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Libros from './components/Libros';
import Socios from './components/Socios';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link> | <Link to="/libros">Libros</Link> | <Link to="/socios">Socios</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Bienvenido a la Biblioteca Aleph</h1>} />
                <Route path="/libros" element={<Libros />} />
                <Route path="/socios" element={<Socios />} />
            </Routes>
        </Router>
    );
}

export default App;
