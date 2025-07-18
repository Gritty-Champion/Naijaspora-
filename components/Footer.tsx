import React from "react";
import fbIcon from "@/img/fb.svg";
import linkedIcon from "@/img/linked.svg";
import instaIcon from "@/img/insta.svg";
import twitterIcon from "@/img/twitter.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import { path } from "@/routes";

const Footer = () => {
  const socialLinks = [
    { icon: fbIcon, link: "" },
    { icon: linkedIcon, link: "" },
    { icon: instaIcon, link: "" },
    { icon: twitterIcon, link: "" },
  ];

  const footerLinks = [
    {
      heading: "Services",
      links: [
        {
          title: "Visa Prep Services",
          link: path.interviewPreps,
        },
        {
          title: "Zero Collateral Loans",
          link: path.funding,
        },
        {
          title: "Agent Verification",
          link: path.agents,
        },
        {
          title: "Document Checks",
          link: path.verifyDocuments,
        },
        {
          title: "Consultations",
          link: path.consultations,
        },
        {
          title: "Visa Denial",
          link: path.denial,
        },
        {
          title: "Post Relocation",
          link: path.postRelocation,
        },
        {
          title: "Scam Alert",
          link: path.report,
        },
        {
          title: "Project Management",
          link: path.projectManagement,
        },
        {
          title: "Emergency Services",
          link: "",
        },
      ],
    },
    {
      heading: "COMPANY",
      links: [
        { title: "About Us", link: "" },
        { title: "Careers", link: "" },
        { title: "Blog", link: "" },
        { title: "Contact", link: "" },
      ],
    },
    {
      heading: "LIFESTYLE",
      links: [
        { title: "For Agents", link: "" },
        { title: "For Nigerians in Diaspora", link: "" },
        { title: "For Japa Hopefuls", link: "" },
        { title: "Join the community", link: "" },
      ],
    },
    {
      heading: "LEGAL",
      links: [
        { title: "Privacy Policy", link: "" },
        { title: "Terms of Service", link: "" },
        { title: "Scam Policy", link: "" },
      ],
    },
    {
      heading: "SUPPORT",
      links: [
        { title: "Help Center", link: "" },
        { title: "Video Guides", link: "" },
        { title: "FAQ", link: "" },
      ],
    },
  ];

  return (
    <motion.footer
      className="flex w-full flex-col items-center gap-[36px] bg-primary-primary_container p-[30px] lg:p-[50px]"
      variants={fadeIn("bottom", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top */}
      <div className="flex flex-col xl:flex-row items-start xl:justify-center gap-[50px] w-full">
        {/* Contact us */}
        <div className="flex flex-col items-start gap-5 p-2.5">
          <p className="text-surface-on text-center font-montserrat text-title-medium font-bold">
            Naijaspora
          </p>
          <p className="text-surface-on text-center font-montserrat text-title-small font-medium">
            Hello@naijaSporra.com
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((Item, idx) => (
              <Link key={idx} href={Item.link}>
                {<Item.icon />}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Items */}
        {footerLinks.map((footerItem, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full max-w-[189px] items-start gap-[15px] p-2.5"
          >
            <p className="text-surface-on uppercase text-center font-montserrat text-title-medium font-bold">
              {footerItem.heading}
            </p>

            {footerItem.links.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-surface-on text-left text-nowrap font-montserrat text-title-small font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex h-px justify-center items-center gap-[65px] self-stretch bg-[#000668]" />
      <p className="w-full text-black text-center font-inter text-body-medium font-regular">
        © Naijaspora 2025
      </p>
    </motion.footer>
  );
};

export default Footer;
