import React from "react";
import Wrapper from "../Wrapper";
import Button from "../Button";
import Image from "next/image";
import contact3 from "@/img/contact_us/contact3.svg?url";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { fadeIn } from "@/libs/motions";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit"
    >
      <Wrapper>
        <div className="flex w-full flex-col lg:flex-row gap-[30px] justify-center items-center lg:gap-2.5 p-2.5 rounded-[100px_0px]">
          <div className="flex w-full max-w-[593px] flex-col justify-center items-center gap-[30px] shrink-0 p-2.5">
            <p className="text-black text-center font-montserrat text-title-medium md:text-headline-large font-bold">
            Have questions or need guidance?
            </p>

            
              <p className="w-full text-black text-center font-montserrat text-headline-small font-regular">
              Let's discuss how NaijaSpora can support your relocation journey, simplify your visa process, and help you thrive anywhere in the world.
              </p>

              <p className="text-[28px]">Get in touch today — we're here to help.</p>
            
            <Button>Get Started</Button>
          </div>

          <div className="w-full lg:w-[642px] relative aspect-[642/543]">
            <Image
              src={contact3}
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default ContactCTA;