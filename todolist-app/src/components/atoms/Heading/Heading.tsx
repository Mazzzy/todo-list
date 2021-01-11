import React, { FC } from "react";

interface HeadingProps {
    type?: string;
    className?: string;
    title?: string;
}

const HeadingText: FC<HeadingProps> = ({ type, className, title }) => {
    return <h3 className={className}>{title || ""}</h3>;
};

export default HeadingText;
