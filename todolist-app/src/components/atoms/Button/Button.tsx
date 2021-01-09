import React, { FC, MouseEvent } from "react";
import "./Button.css";
interface ButtonProps {
    title?: string;
    dataVal?: string;
    className?: string;
    onClick?: MouseEvent<HTMLAnchorElement> | any;
}

const Button: FC<ButtonProps> = ({ title, onClick, dataVal, className }) => {
    return (
        <a role="button" className={`button ${className || ""}`} onClick={onClick} id={dataVal}>
            {title || ""}
        </a>
    );
};

export default Button;
