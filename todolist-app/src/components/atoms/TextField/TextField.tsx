import React, { FC, FormEvent } from "react";
import "./TextField.css";
interface TextFieldProps {
    name?: string;
    value?: string;
    className?: string;
    placeholder?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({ name, value, className, placeholder, onChange }) => {
    return (
        <input
            type="text"
            className={`input ${className || ""}`}
            placeholder={placeholder || ""}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextField;
