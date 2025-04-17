import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AUTH_TOKEN_KEY, LOGIN_ACTION } from "../../utils";
import ApiClient from '../../services/apis';
import RoutePaths from '../../routes/routePath';

const Auth = () => {
    const { user, dispatch } = useAuthContext();
    const { getFromLocalStorage, removeFromLocalStorage } = useLocalStorage(AUTH_TOKEN_KEY);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Construct redirect path
    const redirectTo = location?.pathname !== RoutePaths.MAIN
        ? `${RoutePaths.LOGIN}?location=${location.pathname.slice(1)}${location.search || ''}`
        : RoutePaths.LOGIN;

    useEffect(() => {
        const initializeAuth = async () => {
            const storedToken = getFromLocalStorage();

            const userID = storedToken?.userId;
            if (!userID) {
                setLoading(false);
                return;
            }

            try {
                const response = await ApiClient.user.getCurrentUserById(userID);
                dispatch({ type: LOGIN_ACTION, payload: { token: response.data } });
            } catch (error) {
                console.error('Error fetching user data:', error);
                removeFromLocalStorage();
                navigate(RoutePaths.LOGIN, { replace: true });
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, [dispatch, getFromLocalStorage, removeFromLocalStorage, navigate]);

    return (
        <div className="">
            {loading ? (
                <div className="">Loading...</div>
            ) : user ? (
                <Outlet />
            ) : (
                <Navigate to={redirectTo} replace />
            )}
        </div>
    );
};

export default Auth;
