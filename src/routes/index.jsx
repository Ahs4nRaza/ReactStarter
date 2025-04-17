import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutePaths from "./routePath";
import { LazyLoadComponents, LazyLoadPages } from "./lazyLoad";

function ProtectedRoute({ condition, fallback, children }) {
    return condition ? children : fallback;
}

function AppRoutes() {

    return (
        <Suspense
            fallback={
                <div className="">
                    Loader
                </div>
            }
        >
            <Routes>
                {/* <Route element={<LazyLoadComponents.Auth />}> */}
                <Route
                    path={RoutePaths.MAIN}
                    element={<LazyLoadComponents.App />}
                >
                    <Route
                        index
                        element={<LazyLoadPages.TestPage />}
                    />
                    <Route path={RoutePaths.TEST_PAGE_CHILD} element={<LazyLoadPages.TestPageChild />} />
                    <Route path={RoutePaths.TEST_PAGE_SAMPLE} element={<LazyLoadPages.TestPageSample />} />
                    <Route path={RoutePaths.RESTRICTED} element={<LazyLoadPages.Restricted />} />

                    <Route path="*" element={<LazyLoadPages.NotFound />} />
                </Route>
                {/* </Route> */}

                <Route path={RoutePaths.LOGIN} element={<LazyLoadPages.Login />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
