import React, { FC, FormEvent } from "react";
import "./Checkbox.css";
interface CheckboxProps {
    name?: string;
    checked?: boolean;
    className?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void; // function type
}

const Checkbox: FC<CheckboxProps> = ({ name, checked, className, onChange }) => {
    return <input type="checkbox" className={`${className || ""}`} name={name} checked={checked} onChange={onChange} />;
};

export default Checkbox;
