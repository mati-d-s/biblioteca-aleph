import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Socios() {
    const [socios, setSocios] = useState([]);

    useEffect(() => {
        api.get('/socios')
            .then((response) => setSocios(response.data))
            .catch((error) => console.error('Error al obtener los socios:', error));
    }, []);

    return (
        <div>
            <h2>Socios</h2>
            <ul>
                {socios.map((socio) => (
                    <li key={socio.Id}>
                        {socio.Nombre} - {socio.DNI}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Socios;
