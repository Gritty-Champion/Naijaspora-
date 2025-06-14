import React from 'react'
import Wrapper from '../Wrapper'
import MissionStatementImg from "@/img/points/missionStatementImg.svg?url"
import Image from 'next/image'

const MissionStatement = () => {
  return (
    <section className="w-full h-fit bg-[rgba(35,87,197,0.20)]">
      <Wrapper>
      <div className="flex flex-col lg:flex-row w-full min-h-[490px] justify-center items-center gap-[30px] lg:gap-[70px] py-8 lg:py-0 lg:pt-8">
        <div className="flex w-full lg:w-[678px] h-auto lg:h-[490px] flex-col justify-center items-start gap-[20px] lg:gap-[46px] px-4 lg:px-0 py-4 lg:py-[46px]">
        <p className="self-stretch text-surface-on font-montserrat text-[28px] lg:text-display-medium font-semibold">
          Making a difference together
        </p>
        <p className="self-stretch text-surface-on font-montserrat text-[16px] lg:text-headline-small font-regular">
          NaijaSpora is on a mission to protect, guide, and empower
          Nigerians through every step of their relocation and diaspora
          journey. We provide verified service, expert supports, and
          innovative solutions—from visa preparation and agent verification
          to emergency aid and post-relocation integration—ensuring that no
          Nigerian ever feels stranded, scammed or alone no matter where
          they are
        </p>
        </div>

        <div className="w-[300px] lg:w-[403px] h-auto lg:h-[490px] shrink-0 rounded-[30px]">
          <Image 
            src={MissionStatementImg}
            alt="Mission Statement Illustration"
            width={403}
            height={490}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
      </Wrapper>
    </section>
  );
}

export default MissionStatement
