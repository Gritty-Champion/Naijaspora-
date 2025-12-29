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
import { useRouter } from "next/router";
import { path } from "@/routes";

const ReportPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(path.activeReport);
  };

  const moreToolsData: MoreServicesInterface[] = [
    {
      icon: ToolOne,
      title: "Consultation Services",
      desc: "Talk to a migration expert anytime for personalized advice and solutions.",
      cta_text: "Explore",
      cta_action: () => router.push(path.consultations),
    },
    {
      icon: ToolTwo,
      title: "Scam Alert + Report a Scammer",
      desc: "Stay informed and report fraudsters to keep our community safe.",
      cta_text: "Explore",
      cta_action: () => router.push(path.report),
    },
    {
      icon: ToolThree,
      title: "Post Relocation Support",
      desc: "Stay connected with ongoing support, legal aid, and local diaspora networks.",
      cta_text: "Explore",
      cta_action: () => router.push(path.postRelocation),
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
          heroBtnClick={handleGetStarted}
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
          description={"Four simple steps to get visa-ready with confidence."}
          data={[
            "Choose your visa type and country. Schedule a session that fits your availability",
            "Connect with an expert — an ex-visa officer or relocation specialist — for a  1-on-1 session.",
            "Practice real embassy questions, get coached on tone, posture and answer structure",
            "Receive honest feedback, correction tips, and a checklist to finalize your documents",
          ]}
        />

        <MoreServices
          heading="Power Up Your Relocation Plan with NaijaSpora Extras"
          data={moreToolsData}
        />

        <CTA
          description="Don't just avoid scams — move smart, move prepared"
          cta_text="Get Started"
          cta_action={() => router.push(path.report)}
          image={CTAImg}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
