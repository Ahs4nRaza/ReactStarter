import React, { createContext, useReducer } from "react";
import { SET_BREADCRUMB } from "../utils/actionConstants";

// Create the context
export const BreadcrumbContext = createContext();

// Reducer function to handle breadcrumb state updates
const breadcrumbReducer = (state, action) => {
    switch (action.type) {
        case SET_BREADCRUMB:
            return { ...state, breadcrumb: action.payload };
        default:
            return state;
    }
};

// Context provider component for managing breadcrumb state
export const BreadcrumbContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(breadcrumbReducer, {
        breadcrumb: null,
    });

    return (
        <BreadcrumbContext.Provider value={{ breadcrumb: state.breadcrumb, dispatch }}>
            {children}
        </BreadcrumbContext.Provider>
    );
};
