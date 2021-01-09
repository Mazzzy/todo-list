import React, { FC } from "react";
import NavItem from "../../atoms/NavItem/NavItem";
import Logo from "../../atoms/Logo/Logo";
interface NavBrandProps {
    brandLogo?: string;
}

const NavBrand: FC<NavBrandProps> = ({ brandLogo }) => {
    return (
        <div className="navbar-brand">
            <NavItem href="#">
                <Logo url={brandLogo} />
            </NavItem>
        </div>
    );
};

export default NavBrand;
