import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import Link from "next/link";
import { AuthGuard } from "@/components/AuthGuard";
import { path } from "@/routes";
import { RiLockPasswordLine, RiNotificationLine, RiUserLine, RiShieldLine } from "@remixicon/react";

const settingsOptions = [
  {
    icon: RiUserLine,
    title: "Profile Settings",
    description: "Update your personal information and profile details.",
    href: "/dashboard/profile",
    available: false, // Coming soon
  },
  {
    icon: RiLockPasswordLine,
    title: "Change Password",
    description: "Update your password to keep your account secure.",
    href: path.changePassword,
    available: true,
  },
  {
    icon: RiNotificationLine,
    title: "Notifications",
    description: "Manage your email and push notification preferences.",
    href: "/dashboard/notifications",
    available: false, // Coming soon
  },
  {
    icon: RiShieldLine,
    title: "Privacy & Security",
    description: "Control your privacy settings and security options.",
    href: "/dashboard/privacy",
    available: false, // Coming soon
  },
];

const SettingsPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <DashboardHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-display-small font-medium text-black">Settings</h1>
          <p className="text-body-large text-neutral-30 mt-2">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="grid gap-6">
          {settingsOptions.map((option, index) => {
            const IconComponent = option.icon;

            if (!option.available) {
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-neutral-90 p-6 flex items-start gap-6 opacity-60 cursor-not-allowed"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-neutral-95 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-neutral-40" size={28} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-headline-medium font-medium text-black mb-2">
                      {option.title}
                    </h2>
                    <p className="text-body-medium text-neutral-30">
                      {option.description}
                    </p>
                    <p className="text-body-small text-neutral-40 mt-2 italic">
                      Coming soon
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={option.href}
                className="bg-white rounded-2xl shadow-sm border border-neutral-90 p-6 flex items-start gap-6 hover:shadow-md hover:border-primary-base transition-all duration-200"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary-95 rounded-xl flex items-center justify-center">
                  <IconComponent className="text-primary-base" size={28} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-headline-medium font-medium text-black mb-2">
                    {option.title}
                  </h2>
                  <p className="text-body-medium text-neutral-30">
                    {option.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-neutral-40">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default AuthGuard(SettingsPage);
