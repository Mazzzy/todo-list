import React, { FC } from "react";
import "./Badge.css";
interface BadgeProps {
    title?: string;
}

const Badge: FC<BadgeProps> = ({ title }) => {
    return <span className="badge">{title || ""}</span>;
};

export default Badge;
