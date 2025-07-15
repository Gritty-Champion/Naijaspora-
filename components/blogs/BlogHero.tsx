import React from "react";
import Image, { StaticImageData } from "next/image";
import SVGCurve from "@/img/curveSVGWhite.svg?url";
import { useController } from "@/hooks/useController";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motions";
import { cn } from "@/libs/cn";
import Input from "@/components/contact_us/Input"
import Button from "@/components/Button";

type HeroProps = {
  heroImage?: StaticImageData;
  contentImage?: StaticImageData;
  heroBackgroundClassName?: string;
};

const BlogHero = ({
  heroImage,
  contentImage,
  heroBackgroundClassName = "",
}: HeroProps) => {
  const { heroRef } = useController();
  const [search, setSearch] = useState<string>("");

  return (
    <motion.section
      ref={heroRef}
      className={cn(
        "flex relative w-full h-screen flex-col justify-center items-center gap-2.5 px-[10px] md:px-[20px] xl:px-[100px] py-[100px] lg:py-[150px] bg-no-repeat bg-cover",
        heroBackgroundClassName
      )}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {heroImage && (
        <div className="w-full h-full z-0 absolute top-0 left-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            className="!w-full !h-full object-cover"
            fill
            priority
          />
        </div>
      )}

      <div className="hidden xl:flex flex-col w-full h-[140px] z-0 items-start absolute right-0 bottom-[-2px]">
        <img
          src={SVGCurve}
          alt="Curve Decoration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1440px] flex items-center relative z-[1] h-fit flex-row">
        <div className="flex w-full flex-1 max-w-[751px] h-full flex-col items-start gap-[36px] shrink-0 justify-center">
          <div className="self-stretch font-montserrat text-[42px] font-semibold leading-[normal] ">
            <p className="text-primary-base mb-4 text-headline-medium font-medium">
              STAY UP TO DATE
            </p>
            <p className="font-semibold text-headline-large md:text-display-medium mb-4">
              The NaijaSpora Blog
            </p>
            <p className="text-black text-headline-small font-regular ">Stay informed with expert migration guides, personal relocation stories, visa updates, global living tips, funding solutions, and more</p>

            <div className="flex justify-between items-center h-14 mt-6 gap-4 w-full max-w-md">
  <Input
    label=""
    labelClassName="sr-only"
    name="search"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search for an article"
    className="bg-transparent text-white flex-1 h-14 !py-0 px-4 text-headline-small placeholder-white placeholder-headline-small font-regular border border-primary-base focus:ring-2 focus:ring-primary-base"
  />
  <Button
    onClick={() => {}}
    variant="primary"
    size="lg"
    type="button"
    className="!h-14"
  >
    Search
  </Button>
</div>

          </div>
        </div>

        {contentImage && (
          <div className="relative hidden lg:flex items-end justify-end flex-1 mr-[-55px] mb-24">
            <Image
              src={contentImage}
              alt="Content"
              width={1850}
              height={450}
              className="object-contain scale-[1.2]"
              priority
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default BlogHero;
