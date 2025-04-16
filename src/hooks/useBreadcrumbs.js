import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../contexts/breadcrumbsContext"; // Updated import path

// Custom hook for accessing and modifying the breadcrumb state
export const useBreadcrumb = (breadcrumbValue = null) => {
    const { breadcrumb, dispatch } = useContext(BreadcrumbContext);

    if (!dispatch || breadcrumb === undefined) {
        throw new Error("Breadcrumb Context must be used inside a BreadcrumbContextProvider");
    }

    const setBreadcrumb = (value) => {
        dispatch({
            type: "setBreadcrumb",
            payload: value,
        });
    };


    const getBreadcrumb = () => {
        return breadcrumb;
    };

    useEffect(() => {
        if (breadcrumbValue !== null) {
            // Set the breadcrumb when the component is rendered
            setBreadcrumb(breadcrumbValue);
        }


        return () => {
            setBreadcrumb(null); // Reset breadcrumb when component unmounts
        };
    }, [dispatch, breadcrumbValue]);


    return { breadcrumb, setBreadcrumb, getBreadcrumb };
};
