
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import mail from "@/img/auth/mail.png";
import Image from "next/image";

const VerifyEmailPage = () => {
  //would typically get the email from query params or state management
  const userEmail = "oluwasusitimilehin1@gmail.com";

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6 text-black mt-6 ">
         <Image src={mail} alt="Mail Icon" width={24} height={24} />
       
        <h1 className="text-headline-large font-medium text-black">
          Verify your email
        </h1>
        
        <p className="text-headline-medium font-regular">
          We sent a verification email to <span className="font-medium">{userEmail}</span>. Please check your email to verify your account.
        </p>
        
        <Link href="/login" className="text-headline-small font-medium text-primary-base hover:underline mt-4">
          Go to Log in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;