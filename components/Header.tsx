import { headerMotion } from '@/libs/motions'
import { motion } from 'framer-motion'
import React from 'react'
import Wrapper from './Wrapper'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Button from './Button'
import { RiArrowRightCircleLine } from '@remixicon/react'

const Header = () => {
  return (
    <motion.header
      variants={headerMotion}
      initial="initial"
      animate="animate"
      className="flex w-full h-fit bg-transparent fixed top-0 left-0 z-[1000]"
    >
      <Wrapper>
        <div className="flex w-full justify-between items-center py-[8px]">
          <Logo />

          <HeaderMenu />

          <div className="flex items-center gap-[24px]">
            <Button variant="text" className="text-white">
              Log In
            </Button>
            <Button
              variant="blur"
              iconPosition="right"
              icon={
                <RiArrowRightCircleLine className="w-5 h-5 shrink-0 aspect-[1/1] text-primary-on_primary" />
              }
            >
              Get started
            </Button>
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
}

export default Header
