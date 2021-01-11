import React, { FC, MouseEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTabActive } from "../../store/actions";

import NavBrand from "../molecules/Nav/NavBrand";
import NavMenu from "../molecules/Nav/NavMenu";

import "./Navbar.css";

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
        dispatch(setTabActive(name));
    };

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand />
                <NavMenu activeTab={activeTab} setActiveTabClick={setActiveTabClick} />
            </nav>
        </header>
    );
};

export default Navbar;
