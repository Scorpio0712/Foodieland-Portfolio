"use client";
import React from "react";
import style from "./checkbox.module.css";

interface CircleCheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CircleCheckBook({ id, label, checked, onChange } : CircleCheckBoxProps) {
  return (
    <label htmlFor={id} className={style.labelCheckBox}>
        <input type="checkbox" id={id} className={style.checkBox} checked={checked} onChange={onChange}/>
        <span>{label}</span>
    </label>
  );
}

export default CircleCheckBook;
