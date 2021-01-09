import React, { FC, ReactNode } from "react";

interface LabelProps {
    className?: string;
    children?: ReactNode;
}

const Label: FC<LabelProps> = ({ className, children }) => {
    return <span className={className}>{children}</span>;
};

export default Label;
