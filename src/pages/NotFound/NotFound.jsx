import React from 'react';
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';
import { useLocation } from 'react-router-dom';

function NotFound() {
    const location = useLocation();

    useBreadcrumb({
        parent: {
            label: "Not Found",
            url: location.pathname,
        },
        child: {
            label: "",
        }
    });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "24px",
                backgroundColor: "#2e2f2e",
            }}
        >
            <p>Not Found</p>
        </div>
    );
}

export default NotFound;
