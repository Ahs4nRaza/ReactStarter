import React from 'react'
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';

function TestPage() {
    useBreadcrumb("Test Page");
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
            <p>Test Page</p>
        </div>
    )
}

export default TestPage