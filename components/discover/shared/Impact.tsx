import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImpactProps {
  stats: {
    title: string;
    items: { text: string }[];
  };
  transform: {
    title: {
      pre: string;
      highlight: string;
    };
    description: string;
    image: StaticImageData;
  };
}

const Impact = ({ stats, transform }: ImpactProps) => {
  return (
    <section className="bg-white py-20">
      <Wrapper>
        <div className="w-full space-y-24">
          <div>
            <h2 className="text-headline-medium sm:text-headline-large font-medium mb-8">
              {stats.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.items.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary-base p-8 text-center text-white"
                >
                  <p className="text-headline-medium font-medium">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-headline-large sm:text-display-medium font-semibold mb-8">
                {transform.title.pre}
                <span className="text-primary-base">
                  {transform.title.highlight}
                </span>
              </h2>
              <p className="text-body-large sm:text-headline-small">
                {transform.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden ml-auto"
            >
              <Image
                src={transform.image}
                alt="Transform your services illustration"
                width={500}
                height={300}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Impact;
