"use client";
import React, { useState } from "react";
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
            <Image
              src="/images/design/goodchief-image.png"
              alt=""
              width={350}
              height={472}
            />
          </div>
          <div className={style.contact_ContentForm}>
            <form>
              <div className={style.contact_FormContainerOne}>
                <div className={style.contact_FormFirstCol}>
                  <div className={style.contact_FormGroup}>
                    <label htmlFor="name" className={style.contact_FormLabel}>
                      NAME
                    </label>
                    <input
                      className={style.contact_FormLabelInput}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className={style.contact_FormGroup}>
                    <label
                      htmlFor="subject"
                      className={style.contact_FormLabel}
                    >
                      SUBJECT
                    </label>
                    <input
                      className={style.contact_FormLabelInput}
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter your subject..."
                    />
                  </div>
                </div>
                <div className={style.contact_FormSecCol}>
                  <div className={style.contact_FormGroup}>
                    <label htmlFor="email" className={style.contact_FormLabel}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      className={style.contact_FormLabelInput}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address..."
                    />
                  </div>
                  <div className={style.contact_FormGroup}>
                    <label
                      htmlFor="category"
                      className={style.contact_FormLabel}
                    >
                      ENQUIRY TYPE
                    </label>
                    <select
                      className={style.contact_FormSelectInput}
                      id="category"
                      name="category"
                      required
                    >
                      <option value="" disabled selected>
                        Select a category
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="recipe">Recipe Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.contact_FormContainerTwo}>
                <div className={style.contact_FormGroup}>
                  <label className={style.contact_FormLabel} htmlFor="message">
                    MESSAGE
                  </label>
                  <textarea
                    className={style.contact_FormTextarea}
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    required
                  />
                </div>
              </div>
              <button className={style.contact_SubmitBtn} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className={style.contact_EmailInbox}>
        <EmailInboxComp />
      </section>
      <section className={style.contact_DeliciousRecipe}>
        <h1>Check out the delicious recipe</h1>
        <div className={style.contact_DeliciousRecipeContent}>
          <CardComp
            title="Mixed Tropical Fruit Salad with Superfood Boots"
            image="/images/food/mixedtropifruit-image.png"
            typeOne="30 Minutes"
            typeTwo="Healthy"
            imageHeight="200px"
          />
          <CardComp
            title="Big and Juicy Wagyu Beef Cheeseburger"
            image="/images/food/wagyucheese-image.png"
            typeOne="30 Minutes"
            typeTwo="Western"
            imageHeight="200px"
          />
          <CardComp
            title="Healthy Japanese Fried Rice with Asparagus"
            image="/images/food/japanesefiredrice-image.png"
            typeOne="30 Minutes"
            typeTwo="Healthy"
            imageHeight="200px"
          />
          <CardComp
            title="Cauliflower Walnut Vegetarian Taco Meat"
            image="/images/food/vegantaco-image.png"
            typeOne="30 Minutes"
            typeTwo="Eastern"
            imageHeight="200px"
          />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
