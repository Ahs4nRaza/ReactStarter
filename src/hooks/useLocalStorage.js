export const useLocalStorage = (storageKey) => {
    // Save data to localStorage
    const saveToLocalStorage = (value = "") => {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving to localStorage: ${error.message}`);
        }
    };

    // Retrieve data from localStorage
    const getFromLocalStorage = () => {
        try {
            const item = window.localStorage.getItem(storageKey);
            return item ? JSON.parse(item) : null;  // Returns null if the item is not found
        } catch (error) {
            console.error(`Error retrieving from localStorage: ${error.message}`);
            return null;
        }
    };

    // Remove data from localStorage
    const removeFromLocalStorage = () => {
        try {
            window.localStorage.removeItem(storageKey);
        } catch (error) {
            console.error(`Error removing from localStorage: ${error.message}`);
        }
    };

    return { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
};
