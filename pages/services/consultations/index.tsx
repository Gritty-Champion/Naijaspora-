import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/consult/heroImg.svg?url";
import { consultationFeaturesData, consultationHowToData} from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/consult/ctaImg.svg?url";
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
import featuresImage from "@/img/consult/featureImage.svg?url";
import howToImage from "@/img/consult/howToImage.svg?url";



const Index = () => {
  const { isHeroInView } = useController();
  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Visa Readiness Checklist",
      desc: "Use this printable guide to organize your documents",
      cta_text: "Download",
      cta_action: () => {},
    },
    {
      icon: ToolTwo,
      title: "Student Visa Planning Guide",
      desc: "Breakdown of study routes, school selection, and funding strategies",
      cta_text: "Get the guide",
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
          title={<>Consultation Services</>}
          desc="Talk to a migration expert anytime for personalized advice, visa guidance, and relocation strategies tailored to your journey."
          heroBtnText="Get Started"
          vidComText="Learn More"
          textStyles="text-primary-on_primary"
          vidComClasses="text-primary-on_primary"
          heroBGOverlayClasses="bg-[linear-gradient(270deg,rgba(17,40,91,0.00)_22.12%,rgba(17,40,91,0.60)_56.73%)]"
        />

        <Features
          data={consultationFeaturesData}
          title="Features of Our Personalized Consultation Service"
          subheading="Everything you need to confidently take your next step."
          img={featuresImage}
        />

        <HowTo
          title="How to Book a Session with NaijaSpora Experts"
          subheading="Simple, flexible and designed for your convenience"
          img={howToImage}
          data={consultationHowToData}
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={
            "Get personalized guidance and expert answers for your relocation journey"
          }
          data={PricingFeatures[Category.Consultation]}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={"Get expert migration advice in four simple steps."}
          data={[
            "Pick a date and time that suits your schedule.",
            "Tell us your goals or specific migration-related concerns.",
            "Connect with a verified expert via video or audio call.",
            "Receive expert guidance and next steps tailored for you.",
          ]}
        />

        <MoreServices
          heading="Consultation Resources"
          sectionClasses="bg-primary-on_primary_fixed"
          data={moreToolsData}
        />

        <CTA
          description="Take control of your Journey"
          cta_text="Learn more"
          cta_action={() => {}}
          image={CTAImg}
          addText="Get answers, strategies, and support from trusted experts"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
