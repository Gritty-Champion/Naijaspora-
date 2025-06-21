import { fadeIn } from '@/libs/motions'
import { motion } from 'framer-motion'
import React from 'react'
import Wrapper from '../Wrapper'
import WorksArrow from "@/img/worksArrow.svg"
import icon_1 from "@/img/works_1.svg";
import icon_2 from "@/img/works_2.svg";
import icon_3 from "@/img/works_3.svg";
import icon_4 from "@/img/works_4.svg";
import Button from '../Button'

const HowItWorks = ({
  heading,
  description,
  data
}: {
    heading: string;
    description: string;
    data: string[];
  }) => {
  
  const icons = [icon_1, icon_2, icon_3, icon_4];
  const steps = data.map((item, idx) => ({
    image: icons[idx] || icon_1,
    step: `Step ${idx+1}`,
    text: item,
  }));

  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit"
    >
      <Wrapper>
        <div className="flex flex-col items-center gap-[30px] self-stretch py-0">
          <div className="flex flex-col items-center gap-2.5 self-stretch p-5">
            <p className="text-black font-montserrat text-display-large font-bold">
              {heading}
            </p>

            <p className="text-black font-montserrat text-headline-large font-medium">
              {description}
            </p>
          </div>

          <div className="flex w-full justify-between items-start p-2.5">
            {steps.map((Step, idx) => (
              <>
                <div className="flex w-full lg:w-[246px] h-96 flex-col items-center gap-2.5 shrink-0 p-2.5">
                  <Step.image />
                  <p className="text-primary-base font-montserrat text-display-small font-semibold">
                    {Step.step}
                  </p>

                  <p className="self-stretch text-black text-center font-montserrat text-headline-small font-regular">
                    {Step.text}
                  </p>
                </div>
                {idx !== 3 && <WorksArrow />}
              </>
            ))}
          </div>

          <Button>Learn More</Button>
        </div>
      </Wrapper>
    </motion.section>
  );
}

export default HowItWorks
