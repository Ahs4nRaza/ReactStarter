import React from 'react'
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';
import RoutePaths from "../../routes/routePath"

function TestPage() {
    useBreadcrumb({
        parent: {
            label: "Test Page",
            url: RoutePaths.MAIN
        },
        child: {
            label: "Test Page Child",
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
            <p>Test Page Child</p>
        </div>
    )
}

export default TestPage