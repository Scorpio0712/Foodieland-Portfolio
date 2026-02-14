"use client";

import React, { useState } from "react";
import style from "./email_input.module.css";

interface EmailInputProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

function EmailInput({
  placeholder = "Your email address...",
  buttonText = "Subscribe",
  onSubmit,
}: EmailInputProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (onSubmit) {
      onSubmit(email);
    }

    setEmail("");
    setError("");
  };

  return (
    <div className={style.emailContainer}>
      <form onSubmit={handleSubmit} className={style.emailBox}>
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.emailInput}
          required
        />
        <button type="submit" className={style.subscribeButton}>{buttonText}</button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

export default EmailInput;
