import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../scss/layout.scss";

const Layout = ({ location, children }) => {
    //const rootPath = `${__PATH_PREFIX__}/`;
    //if (location.pathname === rootPath) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const [open, toggleOpen] = useState(false);
    return (
        <div className="layout">
            <header className={open?"header open":"header"}>
                <Link className="title" to={`/`}>{data.site.siteMetadata.title}</Link>
                <div className="nav-links">
                    <Link to={`/`} onClick={() => {toggleOpen(open => !open)}}>home</Link>
                    <Link to={`/blog`} onClick={() => {toggleOpen(open => !open)}}>blog</Link>
                    <Link to={`/work`} onClick={() => {toggleOpen(open => !open)}}>work</Link>
                    <Link to={`/art`} onClick={() => {toggleOpen(open => !open)}}>art</Link>
                    <Link to={`/about`} onClick={() => {toggleOpen(open => !open)}}>about</Link>
                </div>
                <button className="nav-toggle" onClick={() => {toggleOpen(open => !open)}}>
                    {open? "\u00D7": "\u2630"}
                </button>
            </header>
            <main className="main">{children}</main>
            <footer className="footer">
                Copyright © {new Date().getFullYear()}{" "}
                <Link to={`/`}>{data.site.siteMetadata.title}</Link>
            </footer>
        </div>
    );
};

export default Layout;
