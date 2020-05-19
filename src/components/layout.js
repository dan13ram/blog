import React from "react";
import { Link } from "gatsby";
import "../scss/layout.scss";

const Layout = ({ location, title, children }) => {
    //const rootPath = `${__PATH_PREFIX__}/`;
    //if (location.pathname === rootPath) {
    return (
        <div className="layout">
            <header className="header">
                <Link to={`/`}>{title}</Link>
            </header>
            <main>{children}</main>
            <footer className="footer">
                Copyright © {new Date().getFullYear()}{" "}
                <Link to={`/`}>dan13ram</Link>.
            </footer>
        </div>
    );
};

export default Layout;
