import React, { FC, MouseEvent, useState } from "react";

import NavBrand from "../molecules/Nav/NavBrand";
import NavMenu from "../molecules/Nav/NavMenu";

import "./Navbar.css";

const Navbar: FC = () => {
    const [activeName, setActiveName] = useState("all");
    const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
        console.log("Active menu name ", name);
        setActiveName(name);
    };

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand />
                <NavMenu activeTab={activeName} setActiveTabClick={setActiveTabClick} />
            </nav>
        </header>
    );
};

export default Navbar;
