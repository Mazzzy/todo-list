import React, { FC } from "react";
import defaultLogo from "./default-logo.svg";
import "./Logo.css";

interface LogoProps {
    url?: string;
}

const Logo: FC<LogoProps> = ({ url }) => {
    return <img className="logo-img" src={url || defaultLogo} alt="logo-img" />;
};

export default Logo;
