import { createContext, useReducer, useEffect } from "react";
import { AUTH_TOKEN_KEY, LOGIN_ACTION, LOGOUT_ACTION, USER_ROLE } from '@/utils';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, user: action.payload };
        case LOGOUT_ACTION:
            return { user: null, role: null };
        case USER_ROLE:
            return { ...state, role: action.payload };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        role: null,
    });

    useEffect(() => {
        const token = localStorage.getItem(AUTH_TOKEN_KEY);
        if (token) {
            const user = { token };
            dispatch({ type: LOGIN_ACTION, payload: user });
            // Optionally extract role here if available
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
