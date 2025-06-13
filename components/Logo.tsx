import React from 'react'
import {cn} from "@/libs/cn";
import {useController} from "@/hooks/useController";

interface LogoProps {
    isScrolled: boolean
}

const Logo = ({isScrolled}: LogoProps) => {
  const {isHeroInView} = useController()
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
