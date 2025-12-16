import Image from "next/image";
import Logo from "@/components/Logo";
import AuthImage from "@/img/auth/authimage.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children}: AuthLayoutProps) => {
  return (
    <main className="flex lg:h-screen  font-montserrat">
      {/* Left Column: Form/Content */}
      <div className="flex flex-col items-center sm:w-1/2 mx-auto  py-6 px-12  bg-surface-base">
        <div className="w-full max-w-">
          <div className="mb-8">
            <Logo />
          </div>
          {children}
        </div>
      </div>

      {/* Right Column: Decorative Image */}
      <div className="hidden sm:flex sm:w-1/2  bg-[#E0E0FF] ">
        <Image
          src={AuthImage}
          alt="Travel collage with airplane, globe, and luggage"
          width={600}
          height={600}
          priority
          className="object-cover"
        />
      </div>

    </main>
  );
};

export default AuthLayout;
