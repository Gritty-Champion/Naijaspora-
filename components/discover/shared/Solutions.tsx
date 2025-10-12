import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { RiArrowRightCircleLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SolutionItem {
  title: string;
  description: string;
}

interface SolutionsProps {
  title: string;
  items: SolutionItem[];
}

const Solutions = ({ title, items }: SolutionsProps) => {
  return (
    <section className="pt-20">
      <Wrapper>
        <div className="w-full">
          <h2 className="text-headline-medium sm:text-headline-large font-bold text-center mb-12">
            {title}
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
          >
            {items.map((solution, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-white p-8 border-t-8 border-primary-base  flex flex-col items-center"
              >
                <h3 className="text-title-large sm:text-headline-large font-bold mb-4">
                  {solution.title}
                </h3>
                <p className="text-headline-small mb-8">
                  {solution.description}
                </p>

                <div className="mt-auto">
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
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Solutions;