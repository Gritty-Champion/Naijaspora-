import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/consult/heroImg.svg?url";
import {
  postRelocationFeaturesData,
} from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/post-relocation/cta_img.svg?url";
import MoreServices, {
  MoreServicesInterface,
} from "@/components/Services/MoreServices";
import Pricings from "@/components/Services/Pricings";
import PricingFeatures, { Category } from "@/libs/pricingFeatures";
import HowItWorks from "@/components/Services/HowItWorks";
import { useController } from "@/hooks/useController";
import Features from "@/components/Services/Features";
import HowTo from "@/components/Services/HowTo";
import ToolOne from "@/img/denial/more_tools_one.svg";
import ToolTwo from "@/img/denial/more_tools_two.svg";
import ToolThree from "@/img/denial/more_tools_three.svg";
import featuresImage from "@/img/post-relocation/featureImage.svg?url";
import howToImage from "@/img/consult/howToImage.svg?url";

const Index = () => {
  const { isHeroInView } = useController();
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "City Starter Guides",
      desc: "Navigate your new environment with hyperlocal info on transportation, safety, etc",
      cta_text: "Get the Guide",
      cta_action: () => {},
    },
    {
      icon: ToolTwo,
      title: "Legal Help Directory",
      desc: "Verified lawyers and advisors in your region, ready to assist.",
      cta_text: "View directory",
      cta_action: () => {},
    },
    {
      icon: ToolThree,
      title: "Diaspora Communities List",
      desc: "Find and join NaijaSpora-approved diaspora networks in over 15 countries.",
      cta_text: "Browse Groups",
      cta_action: () => {},
    },
  ];
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden"
      }
    >
      <Header isHeroInView={isHeroInView} />
      <main className="flex w-full flex-col items-center gap-[50px]">
        <Hero
          heroBackgroundClassName="bg-[linear-gradient(118deg,rgba(224,224,255,0.50)_64.42%,var(--Primary-90,#E0E0FF)_75.82%)]"
          heroImage={HeroImg}
          title={<>Post-Relocation Support</>}
          desc="Stay connected, protected, and empowered after your arrival—with legal aid, housing support, local diaspora connections, and ongoing guidance."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-primary-on_primary"
          vidComClasses="text-primary-on_primary"
          heroBGOverlayClasses="bg-[linear-gradient(270deg,rgba(17,40,91,0.00)_22.12%,rgba(17,40,91,0.60)_56.73%)]"
        />

        <Features
          data={postRelocationFeaturesData}
          title="Features of Our Post-Relocation Support Service"
          subheading="Comprehensive support that begins the moment your plane lands."
          img={featuresImage}
        />

        <HowTo
          title="How NaijaSpora Makes Post-Arrival Life Easier"
          subheading="Relocating is just the start. Here’s how we help you thrive long after landing"
          img={howToImage}
          type={"grid"}
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={"Stay grounded. Get support. Thrive in your new country"}
          data={PricingFeatures[Category.PostRelocation]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={"Get expert migration advice in four simple steps."}
          data={[
            "Register to access relocation tools and local assistance.",
            "Choose legal, housing, job, or community support options.",
            "We link you to diaspora groups and essential services.",
            "Receive ongoing help and updates as your needs evolve.",
          ]}
        />

        <MoreServices
          heading="Relocation Support Resources"
          sectionClasses="bg-primary-on_primary_fixed"
          data={moreToolsData}
        />

        <CTA
          description="Thrive beyond the Visa"
          cta_text="Learn more"
          cta_action={() => {}}
          image={CTAImg}
          addText="Relocation is more than getting a stamp. It’s about building a life—and we’re right here with you."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
