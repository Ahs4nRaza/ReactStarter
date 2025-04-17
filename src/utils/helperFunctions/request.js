
import { ERROR_CODES_MAPPING, AUTH_TOKEN_KEY } from "../constants";

export const getStoredToken = () => {
    try {
        return JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
    } catch {
        return null;
    }
};

export const setStoredToken = (data) => {
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(data));
};

export const clearSession = () => localStorage.clear();

export const redirectToLogin = (errorCode = "") => {
    const url = errorCode ? `/login?errorcode=${errorCode}` : "/login";
    window.location.assign(url);
};

export const getErrorCode = (errorResponse) => {
    const errorMsg = typeof errorResponse === "string" ? errorResponse : errorResponse?.message;
    const errorCode = errorResponse?.code || errorResponse?.status || errorResponse?.errorCode;

    for (const err of Object.values(ERROR_CODES_MAPPING)) {
        if (
            (errorMsg && err.message === errorMsg) ||
            (errorCode && err.code === String(errorCode))
        ) {
            return err.code;
        }
    }

    return null;
};