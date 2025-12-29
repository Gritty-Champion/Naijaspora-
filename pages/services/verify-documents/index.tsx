import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import HeroImg from "@/img/verify/heroImg.svg?url";
import Services from "@/components/Services/Services";
import { verifyServiceData } from "@/libs/constants";
import CTA from "@/components/Services/CTA";
import CTAImg from "@/img/verify/ctaImg.svg?url";
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

const VerifyDocumentsPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(path.activeVerifyDocuments);
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
      desc: "Stay informed and report fraudsters to keep our community safe. FOR FREE",
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
          title={<>Submit Confidently. Travel Securely</>}
          desc="NaijaSpora's Document Verification service helps you avoid unnecessary rejections by ensuring every academic, financial, and identity document you submit meets the exact requirements of your visa application"
          heroBtnText="Verify Documents"
          heroBtnClick={handleGetStarted}
          vidComText="Learn More"
          textStyles="text-surface-on"
          vidComClasses="text-surface-on"
        />

        <Services
          heading="Why Use NaijaSpora for Document Verification?"
          data={verifyServiceData}
        />

        <Pricings
          heading={"Professional quality and simple pricing"}
          description={
            "Choose the right plan to connect with safe, verified travel agents."
          }
          data={PricingFeatures[Category.Verify]}
          buttonText="Get Started"
          onButtonClick={handleGetStarted}
        />

        <HowItWorks
          heading={"How Does It Work?"}
          description={
            "Ensure your documents are accurate and compliant in four easy steps."
          }
          data={[
            "Submit scanned or digital files for review on our platform.",
            "Experts check formatting, accuracy, and country-specific requirements.",
            "Receive detailed notes and correction tips within 24 hours.",
            "Access a compliance-checked version, ready for embassy submission.",
          ]}
          onLearnMoreClick={() => router.push("/#faq")}
        />

        <MoreServices
          heading="Power Up Your Relocation Plan with NaijaSpora Extras"
          data={moreToolsData}
        />

        <CTA
          description="Planning to relocate? Get trusted guidance, verified support, and real insights to help you japa safely and confidently."
          cta_text="Learn More"
          cta_action={() => router.push(path.forHopefuls)}
          image={CTAImg}
        />
      </main>
      <Footer />
    </div>
  );
};

export default VerifyDocumentsPage;
