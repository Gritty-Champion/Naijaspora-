import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/project/heroImg.svg?url";
import { projectManagementFeaturesData, projectManagementHowToData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/project/cta_img.svg?url";
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
import featuresImage from "@/img/project/featureImage.svg?url";
import howToImage from "@/img/project/howToImage.svg?url";

const Index = () => {
  const { isHeroInView } = useController();
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Investment Handbook",
      desc: "Step-by-step strategies for  business projects",
      cta_text: "Get the Guide",
      cta_action: () => {},
    },
    {
      icon: ToolTwo,
      title: "Sample Projects",
      desc: "See example updates—photos, videos —to know what to expect",
      cta_text: "View Samples",
      cta_action: () => {},
    },
    {
      icon: ToolThree,
      title: "1-on-1 Project Consultations",
      desc: "Book a session with a project advisor to discuss budgets",
      cta_text: "Talk to Us",
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
          title={<>Diaspora Project Management</>}
          desc="Put distance to work for you, not against you."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-primary-on_primary"
          vidComClasses="text-primary-on_primary"
          heroBGOverlayClasses="bg-[linear-gradient(270deg,rgba(17,40,91,0.00)_22.12%,rgba(17,40,91,0.60)_56.73%)]"
        />

        <Features
          data={projectManagementFeaturesData}
          title="Features for Seamless Project Management"
          subheading="Everything you need to build, renovate, or launch—handled end-to-end."
          img={featuresImage}
          contentClasses="flex-row-reverse"
        />

        <HowTo
          title="How to Manage Your Projects with Naijaspora"
          subheading="Simple steps to get started and stay in control"
          img={howToImage}
          data={projectManagementHowToData}
          contentClasses="flex-row"
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={
            "Take control. Flag scammers. Help protect the community"
          }
          data={PricingFeatures[Category.ProjectManagement]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={
            "Manage your business or property projects from abroad in four steps."
          }
          data={[
            "Tell us what you need managed and your desired outcomes.",
            "We deploy trusted agents and professionals near your location.",
            "Receive weekly updates, photos, and milestone reports from your dashboard.",
            "Approve completed work or request changes anytime from abroad.",
          ]}
        />

        <MoreServices
          heading="Project Management Resources"
          sectionClasses="bg-primary-on_primary_fixed"
          data={moreToolsData}
        />

        <CTA
          description="Start Managing your project smarter with NaijaSpora"
          cta_text="Learn more"
          cta_action={() => {}}
          image={CTAImg}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
