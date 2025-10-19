import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/libs/cn";

interface ServiceCardProps {
  bgImage: StaticImageData;
  subtitle: string;
  description: string;
  title: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ bgImage, subtitle, description, title, href, className }) => {
  return (
    <Link href={href}>
      <div className={cn("relative rounded-2xl overflow-hidden group cursor-pointer text-white", className)}>
        {/* Background Image */}
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 "
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors"></div>

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          <div>
            <h3 className="text-title-medium sm:text-headline-medium font-medium">{subtitle}</h3>
            <p className="text-body-medium sm:text-title-small font-medium">{description}</p>
          </div>
          <h2 className="mt-auto text-display-small sm:text-display-large font-semibold uppercase tracking-wider text-center">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

