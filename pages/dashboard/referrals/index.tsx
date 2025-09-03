"use client";

import { useState } from "react";
import Image from "next/image";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import Button from "@/components/Button";
import { RiArrowDownSLine } from "@remixicon/react";
import ReferralImage from "@/img/dashboard/woman.png";

const ReferralsPage = () => {
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const referralLink = "https://go.naijaspora.com/referral?ref=ADJSPRA7GZ";

  // Function to copy the link to the clipboard and provide feedback
  const handleCopy = () => {
    // navigator.clipboard is not available in all contexts, adding a fallback
    if (navigator.clipboard) {
      navigator.clipboard.writeText(referralLink);
    } else {
      // A simple fallback for older browsers or insecure contexts
      const textArea = document.createElement("textarea");
      textArea.value = referralLink;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }

    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 2000); // Reset button text after 2 seconds
  };

  return (
    <div className="min-h-screen font-montserrat">
      <DashboardHeader />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

            {/* Left Column: Content */}
            <div className="flex flex-col sm:gap-6 lg:col-span-3">
              <h1 className="text-title-medium font-bold">
                Invite someone to a life-changing opportunity
              </h1>
              <p className="text-body-large font-regular">
                NaijaSpora is on a mission to unlock global opportunities for Nigerians at home and in the diaspora.
              </p>
              <p className="text-body-large font-regular">
                Know ambitious people with big dreams of studying abroad, relocating, or accessing verified support services? Refer them to NaijaSpora to help them gain access to loans, visa support, and more.
              </p>
              <p className="text-body-large font-regular">
                For every successful enrollment through your referral to eligible programs, you&#39;ll receive a ₦25,000 reward or diaspora service credit. Terms and conditions apply.<sup>1</sup>
              </p>
              <p className="text-body-large font-regular">
                Equal access to opportunities should be a universal right. Join us in turning this ideal into reality.
              </p>

              {/* Copy Link Section */}
              <div className="flex items-center gap-4 mt-4 flex-wrap ">
                <div className="flex-grow flex items-center justify-between p-3 border  border-neutral-70 rounded-lg w-24 sm:w-auto">
                  <span className="text-body-medium font-regular truncate">{referralLink}</span>
                  <RiArrowDownSLine className="text-black bg-neutral-70 rounded-lg h-7 w-7 flex-shrink-0" />
                </div>
                <Button
                  onClick={handleCopy}
                  className="!bg-black w-32 justify-center flex-shrink-0"
                  size="lg"
                >
                  {copyButtonText}
                </Button>
              </div>

              {/* Stats Section */}
              <div className="flex  items-stretch sm:gap-8 mt-6">
                <div className="flex-1 text-center">
                  <p className="text-headline-small font-medium">0</p>
                  <span className="text-title-medium text-neutral-50">Views</span>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-headline-small font-medium">0</p>
                  <span className="text-title-medium text-neutral-50">Registrations</span>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-headline-small font-medium">0</p>
                  <span className="text-title-medium text-neutral-50">Enrollments</span>
                </div>
                <Button
                  size="sm"
                  disabled
                  className="self-start items-start flex-grow-0 !bg-neutral-60 !rounded-full"
                >
                  Redeem
                </Button>
              </div>


              {/* Latest Referrals Section */}
              <div className="mt-6">
                <h2 className="text-title-medium font-bold mb-4">
                  Latest users referred by you
                </h2>
                <div className="p-6  border-2 border-neutral-70 rounded-lg">
                  <p className="text-body-large">No referrals yet</p>
                </div>
              </div>
              <p className="text-body-small mt-2 font-regular">
                Terms and conditions apply. Limited offer. By using this referral program, you agree to our referral terms and conditions.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="hidden lg:flex justify-center items-center lg:col-span-2">
              <Image
                src={ReferralImage}
                alt="Happy traveler with passport and luggage"
                width={500}
                height={600}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <DashboardFooter />
    </div>
  );
};

export default ReferralsPage;
