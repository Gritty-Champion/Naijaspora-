import Image, {StaticImageData} from 'next/image';

interface MigrationTip {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: StaticImageData;
}

interface MigrationTipCardProps {
  tip: MigrationTip;
}

const MigrationTipCard: React.FC<MigrationTipCardProps> = ({ tip }) => {
  return (
    <div className=" rounded-2xl overflow-hidden transition-shadow duration-300 cursor-pointer sm:w-[400px]">
      {/* Image Section */}
      <div className="sm:h-[493px] h-[300px] relative">
        <Image
          src={tip.image}
          alt={tip.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-headline-medium font-medium text-black mb-3 leading-tight">
          {tip.title}
        </h3>
        <p className="text-black font-regular mb-4 text-headline-small leading-relaxed">
          {tip.description}
        </p>
        <div className="flex items-center text-neutral-50 text-sm">
          <span className="font-medium">{tip.author}</span>
          <span className="mx-2">—</span>
          <span>{tip.date}</span>
        </div>
      </div>
    </div>
  );
};

export default MigrationTipCard;