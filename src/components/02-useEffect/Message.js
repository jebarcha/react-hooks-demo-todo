import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {
        //console.log('componente montado');
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Message, eres genial!</h3>
            <hr />
            <p>
                x: {x}  y: {y}
            </p>
        </>
    )
}
