import { ElementType } from "react";
import Link from "next/link";

interface DashboardCardProps {
  icon: ElementType;
  title: string;
  description: string;
    href?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon:Icon, title, description, href }) => {
  if (!href) return null;
  return (
    <Link href={href} className="bg-surface-base p-6 rounded-2xl border border-neutral-70 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="flex flex-col gap-4 ">
       
          <Icon />
        <div>
          <h3 className="text-label-medium font-semibold text-neutral-10 mb-1">{title}</h3>
          <p className="text-title-small text-black">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;