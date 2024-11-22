import React, { useEffect, useState } from "react";
import api from "../services/api";

function Prestamos() {
    const [prestamos, setPrestamos] = useState([]);

    useEffect(() => {
        api.get("/prestamos")
            .then((response) => setPrestamos(response.data))
            .catch((error) => console.error("Error al obtener los préstamos:", error));
    }, []);

    return (
        <div>
            <h2>Préstamos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha Entrega</th>
                        <th>Fecha Devolución</th>
                        <th>ID Libro</th>
                        <th>ID Socio</th>
                    </tr>
                </thead>
                <tbody>
                    {prestamos.map((prestamo) => (
                        <tr key={prestamo.Id}>
                            <td>{prestamo.Id}</td>
                            <td>{prestamo.F_entrega}</td>
                            <td>{prestamo.F_devolucion}</td>
                            <td>{prestamo.Id_libro}</td>
                            <td>{prestamo.Id_socio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Prestamos;
