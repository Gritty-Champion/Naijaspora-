import React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const navs = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
  ];
  return (
    <header className="flex z-10 w-screen justify-between items-center fixed top-0 left-0">
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
