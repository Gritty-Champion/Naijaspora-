import { headerMotion } from '@/libs/motions'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Button from './Button'
import { RiArrowRightCircleLine, RiMenuLine } from '@remixicon/react'
import { cn } from '@/libs/cn'
import {useRouter} from "next/router";

interface HeaderProps {
  isHeroInView: boolean
}

const Header = ({isHeroInView}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={headerMotion}
      initial="initial"
      animate="animate"
      className={cn("flex w-full h-fit fixed top-0 left-0 z-[1000]", {
        "bg-transparent": isHeroInView && !isScrolled,
        "bg-[rgba(255,255,255,0.10)]] backdrop-blur-sm shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)]":
          isScrolled,
        "bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] ":
          !isHeroInView,
      })}
    >
      <Wrapper>
        <div className="flex w-full justify-between items-center py-[8px]">
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
              className={cn("h-[40px] w-[60px]", {
                "text-primary-on_primary": isScrolled || isHeroInView,
                "text-black": !isHeroInView,
              })}
            />
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
}

export default Header
