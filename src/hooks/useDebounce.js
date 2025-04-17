import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Ignore if the delay is set to zero (no debouncing)
        if (delay === 0) {
            setDebouncedValue(value);
            return;
        }

        // Set up the debouncing mechanism
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup the previous timer if value or delay changes
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};

