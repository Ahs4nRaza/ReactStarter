import React from 'react';
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';

function NotFound() {
    useBreadcrumb("Not Found");
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
