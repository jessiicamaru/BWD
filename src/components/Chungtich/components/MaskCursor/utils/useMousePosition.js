import { useState, useEffect } from 'react';

const useMousePosition = (element) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        element.addEventListener('mousemove', updateMousePosition);

        return () => element.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;
