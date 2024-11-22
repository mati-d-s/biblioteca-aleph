import React, { useEffect, useState } from "react";
import api from "../services/api";

function Estado() {
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        api.get("/estados")
            .then((response) => setEstados(response.data))
            .catch((error) => console.error("Error al obtener los estados:", error));
    }, []);

    return (
        <div>
            <h2>Estados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {estados.map((estado) => (
                        <tr key={estado.Id}>
                            <td>{estado.Id}</td>
                            <td>{estado.Descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Estado;
