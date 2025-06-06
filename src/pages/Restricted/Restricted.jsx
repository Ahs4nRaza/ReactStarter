import React from 'react'
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';
import RoutePaths from "../../routes/routePath"

function Restricted() {
    useBreadcrumb({
        parent: {
            label: "Restricted",
            url: RoutePaths.RESTRICTED
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
            <p>Restricted</p>
        </div>
    );
}

export default Restricted