import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import HeroImg from "@/img/allServices.svg?url";
import Button from "@/components/Button";
import { cn } from "@/libs/cn";
import { fadeIn } from "@/libs/motions";
import { RiArrowRightCircleLine, RiPlayCircleLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { useController } from "@/hooks/useController";
import Image from "next/image";
import SVGCurve from "@/img/curveSVGWhite.svg?url";
import ServiceOne from "@/img/route_1.svg";
import ServiceTwo from "@/img/route_2.svg";
import ServiceThree from "@/img/route_3.svg";
import ServiceFour from "@/img/route_4.svg";
import ServiceFive from "@/img/route_5.svg";
import ServiceSix from "@/img/route_6.svg";
import ServiceSeven from "@/img/route_7.svg";
import ServiceEight from "@/img/route_8.svg";
import ServiceNine from "@/img/route_9.svg";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import { path } from "@/routes";


const Services = () => {
  const { heroRef } = useController();
  const servicesPages = [
    {
      title: "Visa Interview Preparation",
      desc: "Get personalized coaching and mock interviews to sharpen your confidence and delivery.",
      image: ServiceOne,
      route: path.interviewPreps,
    },
    {
      title: "Zero Collateral Loans",
      desc: "Access educational loans without collateral or guarantors—fast, fair, and reliable.",
      image: ServiceTwo,
      route: path.funding,
    },
    {
      title: "Agent Verification Services",
      desc: "We screen and approve only trustworthy agents. No more fraud or guesswork.",
      image: ServiceThree,
      route: path.agents,
    },
    {
      title: "Document Verification",
      desc: "We review academic, financial, and travel documents to ensure embassy compliance.",
      image: ServiceFour,
      route: path.verifyDocuments,
    },
    {
      title: "Scam Alert + Report a Scammer",
      desc: "Report suspicious agents or activities. Get alerts and protect your community.",
      image: ServiceFive,
      route: path.report,
    },
    {
      title: "Post-Visa Denial Support",
      desc: "Get instant analysis, AI-based guidance, and a plan for your next attempt.",
      image: ServiceSix,
      route: path.denial,
    },
    {
      title: "Diaspora Project Management",
      desc: "From land purchases to construction, we handle your Nigerian-based projects professionally.",
      image: ServiceSeven,
      route: path.projectManagement,
    },
    {
      title: "Consultation Services",
      desc: "Ask specific questions and receive tailored advice for your relocation plans.",
      image: ServiceEight,
      route: path.consultations,
    },
    {
      title: "Post-Relocation Support",
      desc: "Access legal aid, integration tools, and local diaspora networks to feel at home faster.",
      image: ServiceNine,
      route: path.postRelocation,
    },
  ];

  const router = useRouter();
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden"
      }
    >
      <Header isHeroInView={false} />
      <main className="flex w-full flex-col items-center gap-[50px]">
        <motion.section
          ref={heroRef}
          className={cn(
            "flex relative w-full h-screen flex-col justify-center items-center gap-2.5 px-[10px] md:px-[20px] xl:px-[100px] py-[100px] lg:py-[150px] bg-[linear-gradient(118deg,rgba(224,224,255,0.50)_64.42%,var(--Primary-90,#E0E0FF)_75.82%)]"
          )}
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="hidden xl:flex flex-col w-full h-[140px] z-0 items-start absolute right-0 bottom-[-2px]">
            <Image
              src={SVGCurve}
              alt="Hero Background"
              className="!w-full !h-full object-cover"
              fill
              priority
            />
          </div>

          <div className="w-full max-w-[1440px] flex items-center relative z-[1] h-full flex-row">
            <div className="flex  w-full flex-1 max-w-[751px] h-full flex-col items-start justify-center lg:justify-normal gap-[36px] shrink-0">
              <p
                className={cn(
                  "self-stretch font-montserrat text-[42px] xl:text-[70px] font-semibold leading-[normal]"
                )}
              >
                <span className="text-primary-on_primary_container">
                  All Services
                </span>
              </p>

              <div className="flex max-w-[545px] flex-col items-start gap-2.5">
                <p
                  className={cn(
                    "self-stretch text-surface-on text-headline-large font-medium"
                  )}
                >
                  Empowering your relocation journey with expert-backed tools
                  and support.
                </p>
              </div>
              <div className="flex cursor-pointer w-full max-w-[416px] items-center gap-3 rounded-[10px]">
                <RiPlayCircleLine
                  className={cn(
                    "w-12 h-12 text-surface-on shrink-0 aspect-[1/1] "
                  )}
                />
                <p
                  className={cn(
                    "max-w-[200px] text-surface-on font-inter font-regular text-[12px]"
                  )}
                >
                  Learn More
                </p>
              </div>
            </div>

            <div className="relative h-full w-full flex-1 max-w-[500px] max-h-[500px] hidden lg:flex rounded-[20px]">
              <Image
                src={HeroImg}
                alt="Descriptive text here"
                fill
                className="aspect-[500/500]"
              />
            </div>
          </div>
        </motion.section>

        {servicesPages.map((Service, index) => (
          <Wrapper>
            <section
              key={index}
              className={cn(
                "flex w-fit flex-col lg:flex-row lg:h-[527px] items-center gap-2.5 self-stretch py-[20px]",
                `${index % 2 !== 0 ? "bg-[#F2EFFA]" : "bg-white"}`
              )}
            >
              <div className="flex w-full flex-1 relative flex-col justify-center items-center gap-2.5 self-stretch border-r-[#ABAAB4] p-2.5 border-r-[5px] border-solid">
                <p
                  className={cn(
                    "hidden lg:flex w-[300px] h-[300px] justify-center items-center absolute opacity-50 px-0 py-[84.375px] left-2.5 top-[63px] shrink-0 fill-[var(--Neutral-70,)] text-[196px] font-inter",
                    `${index % 2 !== 0 ? "text-[#7985FF]" : "text-[#ADAAAF]"}`
                  )}
                >
                  {index + 1}
                </p>

                <Service.image />
              </div>

              <div className="flex w-full flex-col justify-center items-center gap-[30px] flex-[1_0_0] self-stretch p-2.5">
                <p className="text-surface-on text-display-medium font-montserrat font-semibold">
                  {Service.title}
                </p>
                <p className="self-stretch text-[#ABAAB4] font-montserrat text-headline-medium font-medium">
                  {Service.desc}
                </p>
                <Button className="lg:w-fit w-full" onClick={() => router.push(Service.route)}>Explore Service</Button>
              </div>
            </section>
          </Wrapper>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
