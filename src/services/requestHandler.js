import { BASE_URL } from "./Api/Constant";
import axios from "axios";
import RoutePaths from "../routes/routePath";
import { getStoredToken, setStoredToken, clearSession, redirectToLogin, getErrorCode } from "../utils";

const LOGIN_PATH = `${BASE_URL}${RoutePaths.AUTH_LOGIN}`;
const REFRESH_TOKEN_PATH = `${BASE_URL}${RoutePaths.REFRESH_TOKEN}`;

let isRefreshing = false;
let refreshQueue = [];

const request = async function (options) {
    const onSuccess = (response) => response.data;

    const onError = async (error) => {
        const errorMessage = error?.response?.data;

        // Use getErrorCode function to fetch the error code
        const errorCode = getErrorCode(errorMessage);

        if (errorCode) {
            clearSession();
            setTimeout(() => redirectToLogin(errorCode), 2000);
        }

        return Promise.reject(error?.response?.data || error?.message);
    };

    const client = axios.create({ baseURL: BASE_URL });

    client.interceptors.request.use(
        (config) => {
            const token = getStoredToken()?.token;
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    client.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error?.response?.status === 401) {
                if (originalRequest.url === REFRESH_TOKEN_PATH) {
                    return Promise.reject(error);
                }

                if (!originalRequest._retry && originalRequest.url !== LOGIN_PATH) {
                    originalRequest._retry = true;

                    if (!isRefreshing) {
                        isRefreshing = true;

                        try {
                            const refreshToken = getStoredToken()?.refreshToken;
                            const { data } = await axios.post(REFRESH_TOKEN_PATH, { refreshToken });

                            const newTokenData = {
                                ...getStoredToken(),
                                token: data?.accessToken,
                                refreshToken: data?.refreshToken,
                            };

                            setStoredToken(newTokenData);

                            client.defaults.headers["Authorization"] = `Bearer ${newTokenData.token}`;
                            originalRequest.headers["Authorization"] = `Bearer ${newTokenData.token}`;

                            refreshQueue.forEach((cb) => cb(null, newTokenData.token));
                            refreshQueue = [];
                            isRefreshing = false;

                            return client(originalRequest);
                        } catch (err) {
                            console.log("Error refreshing token:", err);
                            clearSession();
                            redirectToLogin();
                            refreshQueue.forEach((cb) => cb(err, null));
                            refreshQueue = [];
                            isRefreshing = false;
                            return Promise.reject(err);
                        }
                    } else {
                        return new Promise((resolve, reject) => {
                            refreshQueue.push((err, token) => {
                                if (err) return reject(err);
                                client.defaults.headers["Authorization"] = `Bearer ${token}`;
                                originalRequest.headers["Authorization"] = `Bearer ${token}`;
                                resolve(client(originalRequest));
                            });
                        });
                    }
                }
            }

            return Promise.reject(error);
        }
    );

    return client(options).then(onSuccess).catch(onError);
};

export default request;
