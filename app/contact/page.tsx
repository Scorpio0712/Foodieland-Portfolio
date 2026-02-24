"use client";
import React, {useState} from "react";
import Image from "next/image";
import style from "../style/contact.module.css";
import EmailInboxComp from "../components/email_input/page";
import CardComp from "../components/card/page";

function ContactPage() {
  return (
    <main className={style.contact_Container}>
      <section className={style.contact_Header}>
        <h1>Contact Us</h1>
        <div className={style.contact_Content}>
            <div className={style.contact_ContentImage}>
                <div className={style.contact_ContentImageBG}></div>
                <Image src="/images/design/goodchief-image.png" alt="" width={350} height={472}/>
            </div>
            <div className={style.contact_ContentForm}>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." />
                </form>
            </div>
        </div>
      </section>
      <section className={style.contact_EmailInbox}>
        <EmailInboxComp />
      </section>
    </main>
  );
}

export default ContactPage;
