import React from "react";
import Wrapper from "../Wrapper";
import One from "@/img/features/one.svg?url";
import Two from "@/img/features/two.svg?url";
import Three from "@/img/features/three.svg?url";
import Four from "@/img/features/four.svg?url";
import { cn } from "@/libs/cn";
import Button from "../Button";
import { RiArrowRightCircleLine } from "@remixicon/react";
import Image from "next/image";
import { fadeIn } from "@/libs/motions";
import { motion } from "framer-motion";

const Features = () => {
  const featuresData = [
    {
      heading: "VISA INTERVIEW PREP",
      title: "Ace your visa interviews with expert coaching",
      desc: "Our visa preparation service gives you the confidence and knowledge to succeed. Personalized mock sessions, question banks, and real-time advice.",
      img: One,
      cta_text: "Book a consultation",
    },
    {
      heading: "ZERO COLLATERAL LOANS",
      title: "Fund your studies without stress",
      desc: "Access verified educational loans that don’t require collateral. Let us help you secure funding for your global academic dreams",
      img: Two,
      cta_text: "Apply for Loan Help",
    },
    {
      heading: "AGENT VERIFICATION SERVICES",
      title: "Access our directory of trusted agents",
      desc: "Say goodbye to scams. Use Naijaspora’s verified agent directory to find legitimate, trusted agents in your region.",
      img: Three,
      cta_text: "Search Directory",
    },
    {
      heading: "DOCUMENT VERIFICATION",
      title: "Authenticate your essential documents",
      desc: "Before you submit any visa or admission form, let us verify your documents for correctness and compliance.",
      img: Four,
      cta_text: "Contact us",
    },
  ];
  return (
    <section className="w-full h-fit flex items-center justify-center">
      <Wrapper>
        <div className="flex w-full h-fit flex-col items-center gap-[50px] self-stretch py-2.5">
          <div className="flex flex-col items-center gap-[19px] px-[7px] py-[18px]">
            <p className="self-stretch text-black text-center font-montserrat text-headline-large lg:text-display-large font-semibold">
              No Borders, Just Support.
            </p>
            <p className="self-stretch text-primary-base text-center font-montserrat text-headline-large lg:text-display-large font-bold">
              → Your global partner
            </p>
          </div>

          {/* card */}

          {featuresData.map((Card, idx) => (
            <motion.div
              variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              key={idx}
              className={cn(
                "flex h-fit flex-col lg:flex-row lg:h-[600px] justify-between items-center shrink-0 self-stretch rounded-[40px] lg:p-0",
                { "flex-col-reverse lg:flex-row-reverse": idx % 2 !== 0 },
                {
                  "bg-[linear-gradient(90deg,#FFDAB3_16.84%,#FFBEA0_37.54%,#FF8A65_53.9%)]":
                    idx === 0,
                  "[background:linear-gradient(to_bottom_right,rgba(50,248,100,0.20)_7%,rgba(60,248,131,0.16)_33%,rgba(52,248,72,0.10)_41%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(50,248,100,0.20)_7%,rgba(60,248,131,0.16)_33%,rgba(52,248,72,0.10)_41%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(50,248,100,0.20)_7%,rgba(60,248,131,0.16)_33%,rgba(52,248,72,0.10)_41%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(50,248,100,0.20)_7%,rgba(60,248,131,0.16)_33%,rgba(52,248,72,0.10)_41%)_top_right_/_50%_50%_no-repeat]":
                    idx === 2,
                  "[background:linear-gradient(235deg,rgba(62,134,230,0.21)_55.88%,rgba(35,87,197,0.07)_65.98%)]":
                    idx === 3,
                },
                { "flex items-start gap-[50px] self-stretch": idx === 1 }
              )}
            >
              <div
                className={cn(
                  "flex w-full lg:max-w-[620px] p-[20px] lg:p-[46px] flex-col items-start gap-[20px] lg:gap-[48px]",
                  {
                    "rounded-[40px] h-full [background:linear-gradient(90deg,rgba(107,33,168,0.20)_0%,rgba(94,60,154,0.20)_31.04%,rgba(75,98,134,0.20)_54.25%,rgba(59,130,118,0.20)_74.04%)]":
                      idx === 1,
                  }
                )}
              >
                <p className="self-stretch text-secondary-base font-inter text-body-large font-regular">
                  {Card.heading}
                </p>
                <p className="self-stretch text-surface-on font-montserrat text-headline-small lg:text-headline-medium font-semibold">
                  {Card.title}
                </p>
                <p className="self-stretch text-surface-on font-montserrat text-body-large lg:text-title-medium font-regular">
                  {Card.desc}
                </p>
                <Button
                  iconPosition="right"
                  icon={<RiArrowRightCircleLine size={20} />}
                  variant="text"
                  className="text-primary-base mt-2"
                >
                  {Card.cta_text}
                </Button>
              </div>

              <div
                className={cn(
                  "relative w-full h-[300px] lg:h-full lg:max-w-[50%]",
                  {
                    "flex flex-col justify-center items-center gap-2 self-stretch rounded-[40px] [background:linear-gradient(180deg,rgba(107,33,168,0.50)_39.42%,rgba(217,100,239,0.50)_66.35%)]":
                      idx === 1,
                  }
                )}
              >
                <Image
                  src={Card.img}
                  alt={Card.title}
                  fill
                  className={cn("object-cover", {
                    "object-fill": idx === 1,
                    "rounded-b-[20px] lg:rounded-b-[0px] lg:rounded-r-[20px]":
                      idx === 0,
                    "rounded-t-[20px] lg:rounded-t-[0px] lg:rounded-l-[40px]":
                      idx === 3,
                  })}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
