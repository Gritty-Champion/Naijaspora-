import Wrapper from '../Wrapper'
import Button from '../Button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/libs/motions';
import { cn } from '@/libs/cn';
export interface MoreServicesInterface {
  icon: React.ComponentType;
  title: string;
  desc: string;
  cta_text: string;
  cta_action: () => void;
}
const MoreServices = ({
  heading,
  data,
  sectionClasses = "bg-secondary-on_secondary_container",
}: {
  heading: string;
  data: MoreServicesInterface[];
  sectionClasses?: string;
}) => {
  return (
    <motion.section
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn("w-full h-fit", sectionClasses)}
    >
      <Wrapper>
        <div className="flex w-full flex-col items-center gap-[30px] py-2.5">
          <div className="flex justify-center items-center gap-2.5 self-stretch p-2.5">
            <p className="text-white text-center font-montserrat text-headline-small md:text-display-small font-bold">
              {heading}
            </p>
          </div>

          <div className="flex h-fit lg:h-[500px] flex-col gap-[30px] lg:flex-row justify-between items-center shrink-0 self-stretch p-2.5">
            {data.map((Item, idx) => (
              <div
                key={idx}
                className="flex h-full gap-[20px] w-full lg:max-w-[352px] flex-col justify-between items-center p-5"
              >
                <Item.icon />

                <p className="self-stretch text-white text-center font-montserrat text-display-small font-medium">
                  {Item.title}
                </p>

                <p className="text-white text-center font-inter font-medium text-headline-medium">
                  {Item.desc}
                </p>

                <Button onClick={Item.cta_action}>{Item.cta_text}</Button>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default MoreServices
