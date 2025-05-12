import React from "react";
import Appstore from "@/img/appstore.svg?url";
import Facebook from "@/img/facebook.svg?url";
import Twitter from "@/img/twitter.svg?url";
import LinkedIn from "@/img/linkedin.svg?url";
import Instagram from "@/img/instagram.svg?url";
import Image from "next/image";
import { link } from "fs";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  const footerNavs = [
    {
      heading: "Quick Links",
      links: [
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Scam Alert", link: "/scam-alert" },
        { name: "Blog", link: "/blog" },
      ],
    },
    {
      heading: "Services",
      links: [
        { name: "All Services", link: "/all-services" },
        { name: "Emergency Services", link: "/emergency-services" },
        { name: "Agent Verification", link: "/agent-verification" },
        { name: "Emergency Help", link: "/emergency-help" },
        { name: "Visa Interview Prep", link: "/visa-interview-prep" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { name: "Emergency Line", link: "/emergency-line" },
        { name: "Contact Form", link: "/contact-form" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms of Service", link: "/terms-of-service" },
      ],
    },
  ];
  return (
    <footer className="flex w-full h-fit flex-col items-start gap-5 bg-primary">
      <Container>
        <div className="flex h-fit items-start gap-10 justify-between shrink-0 self-stretch px-20 py-[50px]">
          {/* Company's info */}
          <div className="flex h-full max-w-[550px] flex-col items-start gap-10 flex-[1_0_0]">
            <div className="flex items-start gap-2.5 self-stretch">
              <p className="flex w-full flex-col justify-center text-white font-inter text-[28.8px] font-bold leading-[45.176px]">
                Logo
              </p>
            </div>

            <div className="flex flex-col justify-end items-start gap-[-1px] self-stretch">
              <p className="self-stretch text-[#DDD] font-inter text-[19.2px] font-normal leading-[33.882px]">
                Your trusted bridge for safe, successful, and scam-free
                relocation & diaspora support.
              </p>
            </div>

            <div className="flex items-center gap-[23px]">
              {[Facebook, Twitter, LinkedIn, Instagram, Appstore].map(
                (Icon, idx) => (
                  <div className="w-[34px] h-[34px] cursor-pointer" key={idx}>
                    <Image
                      src={Icon}
                      alt="social-icon"
                      key={idx}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Sections */}
          <div className="flex items-start gap-10 flex-[1_0_0] self-stretch">
            {footerNavs.map((nav, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-[23px] flex-[1_0_0] self-stretch"
              >
                <div className="flex items-center gap-2.5 self-stretch px-0 py-0.5">
                  <p className="flex w-full flex-col justify-center text-white font-inter text-[21.6px] font-semibold leading-[39.529px]">
                    {nav.heading}
                  </p>
                </div>

                {/* Links */}
                {nav.links.map((link, idx) => (
                  <Link
                    href={link.link}
                    className="flex flex-col items-start self-stretch justify-center flex-[1_0_0] text-[#E2E2E2] font-inter text-[19.2px] font-normal leading-[33.882px]"
                    key={idx}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex justify-between items-center shrink-0 self-stretch bg-[#F5F5F7] px-20 py-[27px]">
          <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
            <p className="text-black font-inter text-[16.8px] font-normal leading-[28.235px]">
              © 2025 Naijaspora. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-[34px]">
            {[
              { name: "Terms of Service", link: "/terms" },
              { name: "Privacy Policy", link: "/privacy" },
            ].map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="flex min-w-[141.071px] w-fit flex-col justify-center text-black font-inter text-[16.8px] font-normal leading-[28.235px]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
