import React, { useEffect, useState } from "react";
import api from "../services/api";

function Editorial() {
    const [editoriales, setEditoriales] = useState([]);

    useEffect(() => {
        api.get("/editoriales")
            .then((response) => setEditoriales(response.data))
            .catch((error) => console.error("Error al obtener las editoriales:", error));
    }, []);

    return (
        <div>
            <h2>Editoriales</h2>
            <ul>
                {editoriales.map((editorial) => (
                    <li key={editorial.Id}>{editorial.Nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Editorial;
