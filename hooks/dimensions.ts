import { useState, useEffect } from "react";

export function useDimensions() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window?.addEventListener("resize", handleResize);

        return () => {
            window?.removeEventListener("resize", handleResize);
        };
    }, []);

    return [dimensions.width, dimensions.height];
}
