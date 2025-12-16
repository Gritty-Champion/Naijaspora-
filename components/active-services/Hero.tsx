import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hand1 from "@/img/services/hand.png";
import Image from "next/image";
const services = [
  "Visa Processing",
  "Loan Applications",
  "Document Verification",
  "Finding Agents",
  "Booking Sessions",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === services[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % services.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative text-white min-h-[70vh] flex items-center justify-center text-left px-8 pb-8 pt-20 sm:pb-20 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E0E0FF] via-[#BDC2FF] to-[#9747FF85] opacity-80"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Light beam effect */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl w-full text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-title-large sm:text-headline-medium font-medium">
            AI Solution for the Diaspora
          </h2>
          <p className="text-body-large sm:text-headline-small mb-8">
            Harness smart tools to simplify your migration journey.
          </p>

          <h1 className="text-display-medium md:text-headline-large font-medium leading-tight">
            AI-Powered Talent Assessment & Application Processing
          </h1>

          <div className="mt-12 text-headline-medium md:text-display-medium font-semibold space-y-8">
            <div>
              {" "}
              <span className="font-regular">from</span> hello{" "}
              <Image src={Hand1} alt="hello emoji" className="w-8 h-8 inline" />
            </div>
            <div>
              {" "}
              <span className="font-regular">to</span>{" "}
              {`${services[index].substring(0, subIndex)}`}{" "}
               <span className="animate-ping">|</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
