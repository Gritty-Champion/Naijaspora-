import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface FeatureItem {
  iconSrc: StaticImageData;
  title: string;
  description: string;
}

interface FeaturesProps {
  intro: string;
  items: FeatureItem[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Features = ({ intro, items }: FeaturesProps) => {
  return (
    <section className="bg-white pt-20 px-[10px] md:px-[20px] lg:px-[100px]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-center text-body-large md:text-headline-large font-medium max-w-4xl mx-auto"
      >
        {intro}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        {items.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white p-8 border border-neutral-95 shadow-sm text-center"
          >
            <Image
              src={feature.iconSrc}
              alt={`${feature.title} icon`}
              width={100}
              height={100}
              className="mx-auto mb-6"
            />
            <h3 className="text-headline-medium font-medium mb-2">
              {feature.title}
            </h3>
            <p className="text-headline-small font-regular">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;