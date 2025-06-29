import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/denial/heroImg.svg?url";
import { denialFeaturesData, denialHowToData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/denial/ctaImg.svg?url";
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
import featuresImage from "@/img/denial/featuresImage.svg?url";
import howToImage from "@/img/denial/howToImg.svg?url";



const Index = () => {
  const { isHeroInView } = useController();
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Denial Recovery Playbook",
      desc: "A complete guide to reapplying after your visa is denied.",
      cta_text: "Get the Guide",
      cta_action: () => {},
    },
    {
      icon: ToolTwo,
      title: "Sample Appeal Letters",
      desc: "Ready-to-edit templates for visa reconsideration or clarification.",
      cta_text: "View Samples",
      cta_action: () => {},
    },
    {
      icon: ToolThree,
      title: "1-on-1 Consultations",
      desc: "Chat with an expert for deep-dive review and advice.",
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
          title={<>Post-Visa Denial Support</>}
          desc="Smart recovery after a rejection—no stress, no confusion"
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-primary-on_primary"
          vidComClasses="text-primary-on_primary"
          heroBGOverlayClasses="bg-[linear-gradient(270deg,rgba(17,40,91,0.00)_22.12%,rgba(17,40,91,0.60)_56.73%)]"
        />

        <Features
          data={denialFeaturesData}
          title="Why Get Support with NaijaSpora?"
          subheading="Rejections don’t mean the end—just a smarter next move."
          img={featuresImage}
        />

        <HowTo
          title="Reclaim Your Visa Journey"
          subheading="Don’t stop now. Here’s how to bounce back smarter."
          img={howToImage}
          data={denialHowToData}
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={
            "Choose the right plan to bounce back stronger after a visa rejection"
          }
          data={PricingFeatures[Category.Denial]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={"Recover smarter and plan your next move in four steps."}
          data={[
            "Share your official visa refusal document for personalized insights.",
            "Get instant breakdown of reasons and expert recommendations.",
            "Receive next steps tailored to your visa type and case.",
            "Schedule a session to review your new strategy in detail.",
          ]}
        />

        <MoreServices
          heading="Resources to Help You Recovery"
          sectionClasses="bg-primary-on_primary_fixed"
          data={moreToolsData}
        />

        <CTA
          description="Don’t Let Rejection Define You"
          cta_text="Learn more"
          cta_action={() => {}}
          image={CTAImg}
          addText="Bounce back smarter—with help that actually works."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
