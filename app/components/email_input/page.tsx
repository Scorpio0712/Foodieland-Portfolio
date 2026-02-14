"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section className={style.inBoxContainer}>
      <Image
        className={style.inBoxBackGroundLeft}
        src="/images/design/inBox-design-image.png"
        width={350}
        height={400}
        alt=""
      />
      <Image
        className={style.inBoxBackGroundRight}
        src="/images/design/inBox-design2-image.png"
        width={350}
        height={400}
        alt=""
      />
      <div className={style.inBoxTopic}>
        <h1>Deliciousness to your inbox</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, hic?
          Doloribus porro nesciunt
          <br /> perspiciatis minus repellat ratione quo! Accusantium, quae?
        </p>
      </div>
      <div className={style.inBoxBody}>
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
            <button type="submit" className={style.subscribeButton}>
              {buttonText}
            </button>
          </form>
          {error && <p className={style.error}>{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default EmailInput;
