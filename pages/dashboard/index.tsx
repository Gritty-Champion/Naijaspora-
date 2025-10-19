import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Button from "@/components/Button";
import DocumentsIcon from "@/img/dashboard/documents.svg";
import ApplicationsIcon from "@/img/dashboard/applications.svg";
import FinanceIcon from "@/img/dashboard/finance.svg";
import SettingsIcon from "@/img/dashboard/settings.svg";
import ReferralsIcon from "@/img/dashboard/referrals.svg";
import HelpIcon from "@/img/dashboard/help.svg";
import { RiMessage2Fill } from "@remixicon/react";

const dashboardLinks = [
  {
    icon: DocumentsIcon,
    title: "My documents",
    description: "Upload and manage your essential travel and academic documents.",
    href: "/dashboard/documents"
  },
  {
    icon: ApplicationsIcon,
    title: "My Applications",
    description: "Track and manage your visa, school, and loan applications.",
    href: "/dashboard/applications"
  },
  {
    icon: FinanceIcon,
    title: "Finance and Payments",
    description: "Check your loan status, payment history, and financial aid.",
    href: "/dashboard/finance"
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    description: "Update your preferences, change password, or manage notifications.",
    href: "/dashboard/settings"
  },
  {
    icon: ReferralsIcon,
    title: "Referrals",
    description: "Invite friends to NaijaSpora and earn perks when they succeed.",
    href: "/dashboard/referrals"
  },
  {
    icon: HelpIcon,
    title: "Help",
    description: "Need help with your journey? Reach out to us anytime.",
    href: "/dashboard/help"
  },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Banner */}
        <div className="bg-tertiary-on_tertiary_fixed_variant text-white rounded-2xl p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 h-64">
        <div className="flex justify-center items-center sm:gap-6 gap-2">
          <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 bg-neutral-10 rounded-full flex items-center justify-center text-display-small sm:text-display-large font-bold">
            FJ
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h1 className="text-headline-large sm:text-display-medium font-medium">Femi Jegede</h1>
            <p className="text-body-large sm:text-headline-medium ">jegedeodunayo59@gmail.com</p>
          </div>
          </div>
          <Button variant="primary" className="mt-4 sm:mt-0 !rounded-full">Edit Profile</Button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboardLinks.map((link, index) => (
            <DashboardCard key={index} {...link} />
          ))}
        </div>
      </main>

      <DashboardFooter />
       <div className="py-6 flex items-center mx-6">
                    <p className="text-body-large">
                        Terms and conditions apply. NaijaSpora is not a visa-issuing body and does not guarantee approval. All trademarks, logos, and brand names are property of their respective owners.
                    </p>
                    <RiMessage2Fill size={40} className="ml-4 " />
                </div>
    </div>
  );
};

export default DashboardPage;