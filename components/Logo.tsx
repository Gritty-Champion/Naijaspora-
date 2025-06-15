import React from 'react'
import {cn} from "@/libs/cn";

interface LogoProps {
  isScrolled: boolean,
  isHeroInView: boolean
}

const Logo = ({ isScrolled, isHeroInView }: LogoProps) => {
  return (
    <div className='flex flex-col items-start gap-2.5 p-2.5'>
      <p className={cn(
        "!text-display-small font-semibold",
        {
          "text-primary-on_primary": isScrolled || isHeroInView,
          "text-black": !isHeroInView
        }
      )}>NaijaSpora</p>
    </div>
  )
}

export default Logo
