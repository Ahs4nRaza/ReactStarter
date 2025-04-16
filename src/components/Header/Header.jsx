import React from "react";
import { useBreadcrumb } from "../../hooks/useBreadcrumbs";
import { Link } from "react-router-dom";

const Header = () => {
    const { breadcrumb } = useBreadcrumb();
    const hasChild = breadcrumb?.child?.label?.trim();

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
            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
                {breadcrumb?.parent?.label && (
                    hasChild ? (
                        <Link to={breadcrumb.parent.url} style={{ color: "#00bfff", textDecoration: "underline" }}>
                            {breadcrumb.parent.label}
                        </Link>
                    ) : (
                        <span>{breadcrumb.parent.label}</span>
                    )
                )}
                {hasChild && (
                    <>
                        <span>&gt;</span>
                        <span>{breadcrumb.child.label}</span>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
