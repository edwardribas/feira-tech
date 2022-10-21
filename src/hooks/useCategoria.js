import { useState } from "react";

export const useCategoria = () => {
    const [categoria, setCategoria] = useState(1);

    return ({
        categoria,
        setCategoria
    })
}