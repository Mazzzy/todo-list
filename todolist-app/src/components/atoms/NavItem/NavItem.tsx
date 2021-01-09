import React, { FC, ReactNode, MouseEvent } from "react";

interface NavItemProps {
    href?: string;
    className?: string;
    children?: ReactNode;
    clickHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: FC<NavItemProps> = ({ href, children, className, clickHandler }) => {
    return (
        <a className={`navbar-item ${className || ""}`} href={href || "#"} onClick={clickHandler}>
            {children}
        </a>
    );
};

export default NavItem;
