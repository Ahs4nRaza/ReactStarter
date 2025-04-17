import { lazy } from "react";

export const LazyLoadComponents = {
    App: lazy(() => import("../App")),
    Auth: lazy(() => import("../components/Auth/Auth")),
};

export const LazyLoadPages = {
    Login: lazy(() => import("../pages/Login/Login")),
    NotFound: lazy(() => import("../pages/NotFound/NotFound")),
    Restricted: lazy(() => import("../pages/Restricted/Restricted")),
    TestPage: lazy(() => import("../pages/TestPage/TestPage")),
    TestPageChild: lazy(() => import("../pages/TestPage/TestPageChild")),
};