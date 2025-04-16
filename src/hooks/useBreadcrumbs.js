import { useContext, useEffect, useRef } from "react";
import { BreadcrumbContext } from "../contexts/breadcrumbsContext";

// Custom hook for managing breadcrumb state
export const useBreadcrumb = (breadcrumbValue = null) => {
    const { breadcrumb, dispatch } = useContext(BreadcrumbContext);

    // Throw an error if context is not properly set
    if (!dispatch || breadcrumb === undefined) {
        throw new Error("Breadcrumb Context must be used inside a BreadcrumbContextProvider");
    }

    // Track the previous breadcrumb to detect changes
    const previousBreadcrumb = useRef(breadcrumb);

    // Compare breadcrumb values based on parent/child labels
    const hasBreadcrumbChanged = (current, previous) => {
        return (
            current?.parent?.label !== previous?.parent?.label ||
            current?.child?.label !== previous?.child?.label
        );
    };

    // Dispatch breadcrumb value to the context
    const setBreadcrumb = (value) => {
        dispatch({
            type: "setBreadcrumb",
            payload: value,
        });
    };

    useEffect(() => {
        // Update breadcrumb if it has changed
        if (breadcrumbValue !== null && hasBreadcrumbChanged(breadcrumbValue, previousBreadcrumb.current)) {
            setBreadcrumb(breadcrumbValue);
            previousBreadcrumb.current = breadcrumbValue; // Update reference to the new value
        }

        // Cleanup: reset breadcrumb if component unmounts or value changes
        return () => {
            if (breadcrumbValue !== null && hasBreadcrumbChanged(breadcrumbValue, previousBreadcrumb.current)) {
                setBreadcrumb(null);
            }
        };
    }, [breadcrumbValue]);

    return { breadcrumb, setBreadcrumb };
};
