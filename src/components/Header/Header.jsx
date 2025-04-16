import React from "react";
import { useBreadcrumb } from "../../hooks/useBreadcrumbs";

const Header = () => {
    const { getBreadcrumb } = useBreadcrumb();

    return (
        <header
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                textAlign: "center",
                position: "relative",
                bottom: 0,
                width: "100%",
            }}
        >
            <p>Header</p>
            <p>Current Breadcrumb: {getBreadcrumb()}</p>
        </header>
    );
};

export default Header;
