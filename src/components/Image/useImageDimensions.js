import { useState, useEffect } from 'react';

export default function useImageDimensions(src) {
    const [dimensions, setDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        if (!src) return; // src가 없으면 로직 실행 중단
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };

        img.onerror = () => {
            setDimensions({ width: null, height: null });
        };
    }, [src]);

    return dimensions;
}