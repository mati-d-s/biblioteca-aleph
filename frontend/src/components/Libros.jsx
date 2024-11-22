import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        api.get('/libros')
            .then((response) => setLibros(response.data))
            .catch((error) => console.error('Error al obtener los libros:', error));
    }, []);

    return (
        <div>
            <h2>Libros</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Idioma</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.Id}>
                            <td>{libro.Id}</td>
                            <td>{libro.Titulo}</td>
                            <td>{libro.Autor}</td>
                            <td>{libro.Idioma}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Libros;
