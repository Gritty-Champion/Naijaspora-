import { headerMotion } from "@/libs/motions";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Button from "./Button";
import {
  RiArrowRightCircleLine,
  RiCloseLine,
  RiMenuLine,
} from "@remixicon/react";
import { cn } from "@/libs/cn";
import { useRouter } from "next/router";
import Link from "next/link";
import { path } from "@/routes";

interface HeaderProps {
  isHeroInView: boolean;
}

const Header = ({ isHeroInView }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const accordionData = [
    {
      title: "Services",
      content: [
        { name: "Visa Interview Preparation", link: path.interviewPreps },
        { name: "Zero Collateral Loans", link: path.funding },
        { name: "Agent Verification Services", link: path.verifyDocuments },
      ],
    },
    {
      title: "Learn",
      content: [
        { name: "Help center", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Videos", link: "#" },
      ],
    },
    {
      title: "Contact",
      content: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={headerMotion}
      initial="initial"
      animate="animate"
      className={cn("flex w-full fixed top-0 left-0 z-[1000]", {
        "bg-transparent": isHeroInView && !isScrolled,
        "bg-[rgba(255,255,255,0.10)]] backdrop-blur-sm shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)]":
          isScrolled,
        "bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] ":
          !isHeroInView,
      })}
    >
      <Wrapper>
        <div className="flex relative w-full justify-between items-center py-[8px]">
          <Logo isHeroInView={isHeroInView} isScrolled={isScrolled} />

          <HeaderMenu isHeroInView={isHeroInView} isScrolled={isScrolled} />

          <div className="hidden lg:flex items-center gap-[24px]">
            <Button
              variant="text"
              className={cn({
                "text-primary-on_primary": isScrolled || isHeroInView,
                "text-black": !isHeroInView,
              })}
            >
              Log In
            </Button>
            <Button
              variant={
                router.pathname === "/"
                  ? isScrolled
                    ? "primary"
                    : "blur"
                  : "primary"
              }
              iconPosition="right"
              icon={
                <RiArrowRightCircleLine
                  className={cn("w-5 h-5 shrink-0 aspect-[1/1] text-white")}
                />
              }
            >
              Get started
            </Button>
          </div>

          <div className="w-fit h-fit flex lg:hidden justify-center items-center">
            <RiMenuLine
              className={cn("h-[30px] w-[60px]", {
                "text-primary-on_primary": isScrolled || isHeroInView,
                "text-black": !isHeroInView,
              })}
              onClick={() => setShowMobileMenu(true)}
            />
          </div>

          {/* Mobile menu */}
          <div
            className={cn(
              "fixed flex items-start flex-col gap-[40px] lg:hidden top-0 left-0 bg-white h-screen w-screen overflow-hidden px-[10px] transition-transform duration-300 z-[1100]",
              {
                "translate-y-0": showMobileMenu,
                "-translate-y-full": !showMobileMenu,
              }
            )}
            style={{ willChange: "transform" }}
          >
            {/* Top */}
            <div className="flex relative w-full justify-between items-center py-[8px]">
              <Logo isHeroInView={false} isScrolled={true} />

              <div className="w-fit h-fit flex lg:hidden justify-center items-center">
                <RiCloseLine
                  onClick={() => setShowMobileMenu(false)}
                  className={cn("h-[30px] w-[60px] text-black")}
                />
              </div>
            </div>

            {/* Menus */}
            <ul className="w-full">
              {accordionData.map((item, idx) => (
                <li key={idx} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left font-medium"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span>{item.title}</span>
                    {Array.isArray(item.content) && (
                      <span>{openIndex === idx ? "-" : "+"}</span>
                    )}
                  </button>
                  {openIndex === idx && Array.isArray(item.content) && (
                    <div className="pb-4 pl-2 flex flex-col gap-[12px] text-gray-600 text-sm">
                      {Array.isArray(item.content) ? (
                        <>
                          {item.content.map((data, idx) => (
                            <Link key={idx} href={data.link}>
                              {data.name}
                            </Link>
                          ))}
                        </>
                      ) : null}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
