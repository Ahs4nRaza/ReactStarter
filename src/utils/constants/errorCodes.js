export const ERROR_CODES_MAPPING = {
    INVALID_TOKEN: {
        message: "The provided session token is invalid. Please log in again.",
        code: "400",
    },
    INVALID_SESSION: {
        message: "Your session is invalid or expired. Please log in again.",
        code: "401",
    },
    UNAUTHORIZED: {
        message: "You are not authorized to access this resource. Please check your permissions.",
        code: "403",
    },
    ACCOUNT_LOCKED: {
        message: "Your account has been locked due to multiple failed login attempts. Please contact administration for assistance.",
        code: "413",
    },
    SESSION_TIMEOUT: {
        message: "You have been logged out due to inactivity. Please log in again.",
        code: "414",
    },
    PASSWORD_CHANGED: {
        message: "Your password has been changed. You have been logged out for security reasons. Please log in again.",
        code: "415",
    },
    MULTIPLE_LOGINS: {
        message: "Your account has been logged in from another device. You have been logged out. Please log in again.",
        code: "416",
    },
    INSUFFICIENT_PERMISSIONS: {
        message: "You do not have sufficient permissions to perform this action. Please contact the administrator.",
        code: "417",
    },
    ACCOUNT_SUSPENDED: {
        message: "Your account has been suspended. Please contact support for more information.",
        code: "418",
    },
    PROFILE_CHANGED: {
        message: "You have been logged out due to a change in your profile. Kindly log back in or contact administration for assistance.",
        code: "409",
    },
    SESSION_EXPIRED: {
        message: "Your session has expired. Please log in again.",
        code: "410",
    },
    ROLE_CHANGED: {
        message: "Your role has been changed. You have been logged out. Please log in again with the updated permissions.",
        code: "411",
    },
    USER_DATA_CHANGED: {
        message: "Your user data has been modified. You have been logged out. Please log in again to view the latest information.",
        code: "412",
    },
    SYSTEM_MAINTENANCE: {
        message: "The system is under maintenance. Please try again later.",
        code: "503",
    },
};
