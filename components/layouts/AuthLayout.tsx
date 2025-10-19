import Image from "next/image";
import Logo from "@/components/Logo";
import AuthImage from "@/img/auth/authimage.png";
import CollectUserInfos from "../CollectUserInfos";
import { Dispatch, SetStateAction } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  collectInfo?: boolean;
  setCollectInfo?: Dispatch<SetStateAction<boolean>>
}

const AuthLayout = ({ children, collectInfo}: AuthLayoutProps) => {
  return (
    <main className="flex lg:h-screen lg:overflow-hidden font-montserrat">
      {/* Left Column: Form/Content */}
      <div className="flex flex-col items-center sm:w-1/2 mx-auto  py-6 px-12  bg-surface-base">
        <div className="w-full max-w-">
          <div className="mb-8">
            <Logo isHeroInView={false} isScrolled={true} />
          </div>
          {children}
        </div>
      </div>

      {/* Right Column: Decorative Image */}
      <div className="hidden sm:flex sm:w-1/2  bg-[#E0E0FF] p-">
        <Image
          src={AuthImage}
          alt="Travel collage with airplane, globe, and luggage"
          width={600}
          height={600}
          priority
          className="object-cover"
        />
      </div>

      <CollectUserInfos open={collectInfo !== undefined && collectInfo} />
    </main>
  );
};

export default AuthLayout;
