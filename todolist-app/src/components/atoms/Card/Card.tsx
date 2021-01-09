import React, { FC, ReactNode } from "react";
import "./Card.css";
interface CardProps {
    title?: string;
    children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
    const renderCardTitle = () => (
        <div className="card-header">
            <p className="card-header-title">
                <span>{title || ""}</span>
            </p>
        </div>
    );
    return (
        <div className="card">
            {title ? renderCardTitle() : ""}
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;
