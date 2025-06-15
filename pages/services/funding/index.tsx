import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/funding/heroImg.svg?url";
import Services from "@/components/Services/Services";
import { fundingServiceData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/consultations/cta_img.svg?url";
import MoreServices, {
  MoreServicesInterface,
} from "@/components/Services/MoreServices";
import VisaPrepIcon from "@/img/funding/moretool_1.svg";
import ShieldIcon from "@/img/funding/moretool_2.svg";
import VerifyIcon from "@/img/verify.svg";

const index = () => {
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: VisaPrepIcon,
      title: "Visa Interview Prep",
      desc: "Expert coaching and mock sessions to help you confidently ace your visa interview.",
      cta_text: "Learn more",
      cta_action: () => {},
    },
    {
      icon: ShieldIcon,
      title: "Agent Verification Services",
      desc: "Find and connect with verified, trusted travel agents — no more scams.",
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
          title={<>Get the Funds You Need—No Collateral</>}
          desc="NaijaSpora connects you with legitimate lenders offering fast, flexible loans designed for students and travelers — with no collateral required and 100% transparency."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-surface-on"
          vidComClasses="text-surface-on"
        />

        <Services
          heading="Secure the funds you need for your travel dreams — no property, no guarantor, no stress."
          data={fundingServiceData}
        />

        <MoreServices
          heading="Other Services to Supercharge Your Journey"
          data={moreToolsData}
        />

        <CTA
          description="Join the NaijaSpora community of empowered travelers"
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
