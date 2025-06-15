import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/agents/heroImg.svg?url";
import Services from "@/components/Services/Services";
import { agentServiceData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/agents/cta_img.svg?url";
import MoreServices, {
  MoreServicesInterface,
} from "@/components/Services/MoreServices";
import ToolOne from "@/img/agents/tool_1.svg";
import ToolTwo from "@/img/alert.svg";
import ToolThree from "@/img/funding/moretool_2.svg";

const index = () => {
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Zero Collateral Loans",
      desc: "Get access to educational loans without collateral to fund your studies abroad.",
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
      title: "Diaspora Project Management",
      desc: "Let us manage your property or business projects back home — stress-free.",
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
          title={<>Connect Only with Trusted Travel Agents</>}
          desc="NaijaSpora helps you avoid scammers by connecting you with licensed, pre-verified travel agents — ensuring your relocation journey starts with confidence and safety."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-surface-on"
          vidComClasses="text-surface-on"
        />

        <Services
          heading="Why Choose NaijaSpora Agent Verification?"
          data={agentServiceData}
        />

        <MoreServices
          heading="Other Services to Supercharge Your Journey"
          data={moreToolsData}
        />

        <CTA
          description="Join Thousands Using NaijaSpora Agent Connect"
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
