import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/contact_us/ContactHero";
import ContactForm from "@/components/contact_us/ContactForm";
import CallbackForm from "@/components/contact_us/CallbackForm";
import Whatsapp from "@/components/contact_us/Whatsapp";
import HeroImg from "@/img/contact_us/Herormbg.png";
import contact3 from "@/img/contact_us/contact3.svg?url";
import CTA from "@/components/Services/CTA";
import NewsletterSubscribe from "@/components/contact_us/NewsletterSubscribe";

const index = () => {
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden font-montserrat"
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

        <Whatsapp />

        <CallbackForm />

        <NewsletterSubscribe />

        <CTA
          description="Have questions or need guidance?"
          addText={
            <>
              <p>
                Let&apos;s discuss how NaijaSpora can support your relocation
                journey, simplify your visa process, and help you thrive
                anywhere in the world.
              </p>
              <p className="text-title-medium md:text-headline-medium font-medium">
                Get in touch today — we&apos;re here to help.
              </p>
            </>
          }
          cta_text="Get Started"
          cta_action={() => {}}
          image={contact3}
          imageClassName="rounded-none"
        />
      </main>
      <Footer />
    </div>
  );
};

export default index;
