"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "./Button";
import { useController } from "@/hooks/useController";
import { cn } from "@/utils/utils";

const Header = () => {
  const navs = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
  ];

  const { isHeroInView } = useController();
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "flex z-50 w-screen justify-between items-center fixed top-0 left-0 transition-colors duration-300",
        {
          "bg-primary/80": !isHeroInView,
          "backdrop-blur-md": isScrolled,
        }
      )}
    >
      <Container>
        <div className="flex w-full justify-between items-center px-20 py-3.5">
          {/* Logo */}
          <div className="flex items-center gap-[30px] text-white font-inter text-2xl font-medium leading-[normal]">
            Logo
          </div>

          {/* Navs */}
          <nav className="flex items-center gap-[30px]">
            {navs.map((nav, idx) => (
              <Link
                className="text-white font-inter text-base font-normal leading-[normal]"
                key={idx}
                href={nav.link}
              >
                {nav.name}
              </Link>
            ))}
          </nav>

          {/* Button */}

          <Button className="px-[30px] py-2.5 !bg-white !text-dark">
            About
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
