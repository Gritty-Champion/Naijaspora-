import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/consultations/heroImg.svg?url";
import Services from "@/components/Services/Services";
import { interViewPrepsServiceData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/consultations/cta_img.svg?url"
import MoreServices, { MoreServicesInterface } from "@/components/Services/MoreServices";
import AlertIcon from "@/img/alert.svg"
import SupportIcon from "@/img/support.svg"
import VerifyIcon from "@/img/verify.svg"
import Pricings from "@/components/Services/Pricings";
import PricingFeatures, { Category } from "@/libs/pricingFeatures";
import HowItWorks from "@/components/Services/HowItWorks";

const index = () => {
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: AlertIcon,
      title: "Agent Verification Services",
      desc: "Find and connect with verified, trusted travel agents — no more scams.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
    {
      icon: SupportIcon,
      title: "Post-Visa Denial Support",
      desc: "Get smart insights and next steps from our AI chatbot after a visa denial.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
    {
      icon: VerifyIcon,
      title: "Document Verification",
      desc: "Ensure your documents are accurate and compliant before submission.",
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
          title={<>Be Visa Interview Ready with NaijaSpora</>}
          desc="Get expert-led coaching and interview prep that helps you walk into your visa appointment with confidence."
          heroBtnText="Book a consultation now"
          vidComText="Learn More"
          textStyles="text-surface-on"
          vidComClasses="text-surface-on"
        />

        <Services
          heading="Turn visa stress into success with expert-led interview coaching"
          data={interViewPrepsServiceData}
        />

        <Pricings
          heading={"Visa Interview Prep Pricing"}
          description={"Flexible plans for every visa journey."}
          data={PricingFeatures[Category.InterviewPreps]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={"Four simple steps to get visa-ready with confidence."}
          data={[
            "Choose your visa type and country. Schedule a session that fits your availability",
            "Connect with an expert — an ex-visa officer or relocation specialist — for a  1-on-1 session.",
            "Practice real embassy questions, get coached on tone, posture and answer structure",
            "Receive honest feedback, correction tips, and a checklist to finalize your documents",
          ]}
        />

        <MoreServices
          heading="More Services to Help You Secure That Visa Faster"
          data={moreToolsData}
        />

        <CTA
          description="Join the NaijaSpora community of successful visa applicants"
          cta_text="Learn more"
          cta_action={() => {}}
          image={CTAImg}
        />
      </main>
      <Footer />
    </div>
  );
};

export default index;
