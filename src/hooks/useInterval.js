import { useRef, useEffect } from "react";

export const useInterval = (callback, delay) => {
    const currentCallback = useRef();

    // Store the latest callback in the ref.
    useEffect(() => {
        if (typeof callback === "function") {
            currentCallback.current = callback;
        }
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (delay === null || typeof delay !== "number") return;

        const executeCallback = () => {
            if (currentCallback.current) {
                currentCallback.current();
            }
        };

        const intervalId = setInterval(executeCallback, delay);
        return () => clearInterval(intervalId); // Cleanup on unmount or delay change
    }, [delay]);
};


