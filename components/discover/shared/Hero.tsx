import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { RiArrowRightCircleLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroProps {
  title: {
    pre: string;
    highlight: string;
  };
  subtitle: string;
  image: StaticImageData;
}

const Hero = ({ title, subtitle, image }: HeroProps) => {
  return (
    <section className="bg-secondary-container py-20 sm:py-28">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-display-medium font-semibold text-black leading-tight">
              {title.pre}
              <span className="text-primary-base">{title.highlight}</span>
            </h1>
            <p className="mt-4 text-headline-small font-regular max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="#">
                <Button
                  variant="primary"
                  iconPosition="right"
                  icon={
                    <RiArrowRightCircleLine className="w-5 h-5 shrink-0" />
                  }
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src={image}
              alt="Hero illustration"
              width={550}
              height={500}
              priority
            />
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;