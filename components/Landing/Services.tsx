
import React from "react";
import Wrapper from "../Wrapper";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import One from "@/img/services/Service One.png";
import Two from "@/img/services/Services Two.png";
import Three from "@/img/services/Service three.png";
import Four from "@/img/services/Service four.png";
import Five from "@/img/services/Service five.png";
import Six from "@/img/services/Service Six.png";
import Seven from "@/img/services/Service 7.png";
import Eight from "@/img/services/Service eight.png";
import Nine from "@/img/services/Service Nine.png";
import Button from "../Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";

const Services = () => {
  const servicesData = [
    {
      img: One,
      title: "VISA INTERVIEW PREP",
      desc: "Expert coaching and mock sessions to help you confidently ace your visa interview.",
      cta_text: "Get Started",
      cta_click: () => {},
    },
    {
      img: Two,
      title: "ZERO COLLATERAL LOANS",
      desc: "Get access to educational loans without collateral to fund your studies abroad.",
      cta_text: "Apply",
      cta_click: () => {},
    },
    {
      img: Three,
      title: "AGENT VERIFICATION SERVICES",
      desc: "Find and connect with verified, trusted travel agents — no more scams.",
      cta_text: "Search Directory",
      cta_click: () => {},
    },
    {
      img: Four,
      title: "DOCUMENT VERIFICATION",
      desc: "Ensure your documents are accurate and compliant before submission.",
      cta_text: "Verify Documents",
      cta_click: () => {},
    },
    {
      img: Five,
      title: "SCAM ALERT",
      desc: "Stay informed and report fraudsters to keep our community safe",
      cta_text: "Report a Scam",
      cta_click: () => {},
    },
    {
      img: Six,
      title: "POST-VISA DENIAL SUPPORT",
      desc: "Get smart insights and next steps from our AI chatbot after a visa denial",
      cta_text: "Chat",
      cta_click: () => {},
    },
    {
      img: Seven,
      title: "DIASPORA PROJECT MANAGEMENT",
      desc: "Let us manage your property or business projects back home — stress-free",
      cta_text: "Get Started",
      cta_click: () => {},
    },
    {
      img: Eight,
      title: "CONSULTATION SERVICES",
      desc: "Our experts are ready to answer questions, offer advice, and provide solutions",
      cta_text: "Book a consultation",
      cta_click: () => {},
    },
    {
      img: Nine,
      title: "POST-RELOCATION SUPPORT",
      desc: "Stay connected with ongoing support, legal aid, and local diaspora networks.",
      cta_text: "Get Started",
      cta_click: () => {},
    },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  // Scroll button click
  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 800;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse drag-to-scroll
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      container.classList.add("cursor-grabbing");
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1; // Adjust speed here
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.section
      className="w-full h-fit"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Wrapper>
        <div className="flex w-full flex-col items-center gap-[50px] bg-white">
          <div className="flex flex-col lg:flex-row w-full items-end gap-2.5">
            <div className="flex max-w-[681px] flex-col items-start gap-2.5 shrink-0 p-2.5">
              <p className="self-stretch text-black font-montserrat text-headline-medium lg:text-display-large font-semibold">
                More than just consultation. It's your global safety net.
              </p>
            </div>

            {/* Scroll Buttons */}
            <div className="flex justify-end items-end gap-[18px] flex-[1_0_0] p-2.5">
              <div
                onClick={() => handleScroll("left")}
                className="flex cursor-pointer w-[65px] h-[65px] flex-col justify-center items-center gap-2.5 rounded-[70px] border-neutral-10 p-2.5 border-2 border-solid"
              >
                <RiArrowLeftLine className="w-6 h-6 shrink-0" />
              </div>
              <div
                onClick={() => handleScroll("right")}
                className="flex cursor-pointer w-[65px] h-[65px] flex-col justify-center items-center gap-2.5 rounded-[70px] border-neutral-10 p-2.5 border-2 border-solid"
              >
                <RiArrowRightLine className="w-6 h-6 shrink-0" />
              </div>
            </div>
          </div>

          {/* Scrollable Services */}
          <div className="w-full overflow-hidden">
            <div
              ref={containerRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-[50px] px-0 py-2.5 select-none"
            >
              {servicesData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-full max-w-[800px] h-[560px] flex flex-col items-start gap-[50px] rounded-[16px] overflow-hidden p-[45px] text-white"
                >
                  {/* Background Image */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-[rgba(17,40,91,0.7)] z-10" />

                  {/* Content */}
                  <div className="relative z-20 flex max-w-[615px] h-[368px] flex-col justify-between items-start shrink-0">
                    <p className="w-full font-montserrat text-headline-small lg:text-display-small font-medium">
                      {item.title}
                    </p>
                    <p className="font-montserrat text-headline-medium lg:text-display-medium font-semibold">
                      {item.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="relative z-20">
                    <Button onClick={item.cta_click}>{item.cta_text}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Services;
