"use client";
import React from "react";
import style from "./checkbox.module.css";

interface CircleCheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CircleCheckBook({
  id,
  label,
  checked,
  onChange,
  className,
}: CircleCheckBoxProps) {
  return (
    <label htmlFor={id} className={`${style.labelCheckBox} ${className || ""}`}>
      <input
        type="checkbox"
        id={id}
        className={style.checkBox}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}

export default CircleCheckBook;
