import Button from "@/components/Button";
import { RiArrowRightCircleLine } from "@remixicon/react"; 
import { cn } from "@/libs/cn";
import Sample from "@/img/blogs/journey.png"

const JourneyCTA = () => {
  return (
    <div
      className="max-w-4xl mx-auto my-16 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${Sample.src})` }}
    >
      <div className="flex flex-col items-center justify-center text-center gap-6 p-8">
        <h3 className="text-3xl md:text-headline-medium font-medium text-black max-w-sm">
          Ready to begin your visa journey?
        </h3>
        
        <Button
          variant="primary"
          iconPosition="right"
          icon={
            <RiArrowRightCircleLine
              className={cn("w-5 h-5 shrink-0 aspect-[1/1] text-white")}
            />
          }
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default JourneyCTA;