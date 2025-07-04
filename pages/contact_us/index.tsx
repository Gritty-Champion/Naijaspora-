import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/contact_us/ContactHero";
import ContactForm from "@/components/contact_us/ContactForm";
import CallbackForm from "@/components/contact_us/CallbackForm";

import React from "react";
import HeroImg from "@/img/contact_us/Herormbg.png";
import ContactCTA from "@/components/contact_us/ContactCTA";

import NewsletterSubscribe from "@/components/contact_us/NewsletterSubscribe";

const index = () => {
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden"
      }
    >
      <Header isHeroInView={false} />
      <main className="flex w-full flex-col items-center gap-[50px]">
        <Hero
          heroBackgroundClassName="bg-[#d3eaf2]"
          heroImage={undefined}
          contentImage={HeroImg}
        />

        <ContactForm />

        <CallbackForm />

        <NewsletterSubscribe />

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default index;
