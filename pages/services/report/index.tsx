import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/report/heroImg.svg?url";
import Services from "@/components/Services/Services";
import { reportServiceData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/report/cta_img.svg?url";
import MoreServices, {
  MoreServicesInterface,
} from "@/components/Services/MoreServices";
import ToolOne from "@/img/verify/toolOne.svg";
import ToolTwo from "@/img/alert.svg";
import ToolThree from "@/img/verify/toolThree.svg";
import Pricings from "@/components/Services/Pricings";
import PricingFeatures, { Category } from "@/libs/pricingFeatures";
import HowItWorks from "@/components/Services/HowItWorks";

const index = () => {
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Consultation Services",
      desc: "Talk to a migration expert anytime for personalized advice and solutions.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
    {
      icon: ToolTwo,
      title: "Scam Alert + Report a Scammer",
      desc: "Stay informed and report fraudsters to keep our community safe.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
    {
      icon: ToolThree,
      title: "Post Relocation Support",
      desc: "Stay connected with ongoing support, legal aid, and local diaspora networks.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
  ];
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden"
      }
    >
      <Header isHeroInView={false} />
      <main className="flex w-full flex-col items-center gap-[50px]">
        <Hero
          heroBackgroundClassName="bg-[linear-gradient(118deg,rgba(224,224,255,0.50)_64.42%,var(--Primary-90,#E0E0FF)_75.82%)]"
          heroImage={undefined}
          contentImage={HeroImg}
          title={<>Scam Alert & Scammer Reporting</>}
          desc="NaijaSpora's Scam Alert system empowers you to detect fraud early, stay ahead of scams, and report suspicious agents or activities — so you and thousands of others can travel safely."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-surface-on"
          vidComClasses="text-surface-on"
        />

        <Services
          heading="Why Use NaijaSpora’s Scam Protection Tools?"
          data={reportServiceData}
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={
            "Take control. Flag scammers. Help protect the community"
          }
          data={PricingFeatures[Category.Report]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={
            "Report scams and protect others in just four simple steps."
          }
          data={[
            "Share scammer details and provide any supporting evidence you have.",
            "Our team reviews the case and verifies the submitted information.",
            "Track the review process and receive timely investigation feedback.",
            "We update our scam database and notify the NaijaSpora community.",
          ]}
        />

        <MoreServices
          heading="Power Up Your Relocation Plan with NaijaSpora Extras"
          data={moreToolsData}
        />

        <CTA
          description="Don’t just avoid scams — move smart, move prepared"
          cta_text="Get Started"
          cta_action={() => {}}
          image={CTAImg}
        />
      </main>
      <Footer />
    </div>
  );
};

export default index;
