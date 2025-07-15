import Image, { StaticImageData } from "next/image";

interface FeaturedCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: StaticImageData;
}

const FeaturedCard = ({
  image,
  title,
  description,
  authorName,
  authorAvatar,
}: FeaturedCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm max-w-4xl w-full mx-auto p-4 my-4">
      {/* Cover Image */}
      <div className="w-full h-[220px] sm:h-[280px] relative">
        <Image
          src={image}
          alt="Blog Cover"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="">
        <h2 className="text-title-large sm:text-display-large font-bold my-4">
          {title}
        </h2>
        <p className="text-headline-medium font-medium mb-3">{description}</p>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-auto">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
          <span className="text-headline-medium font-medium">{authorName}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
