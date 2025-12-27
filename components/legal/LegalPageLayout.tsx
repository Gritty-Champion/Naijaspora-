import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { path } from "@/routes";
import { cn } from "@/libs/cn";
import LegalHero from "./Hero";

const legalSections = [
  { title: "Privacy Policy", link: path.privacyPolicy },
  { title: "Terms of Service", link: path.termsOfService },
  { title: "Acceptable Use Policy", link: path.acceptableUse },
  { title: "Information Security Policy", link: path.infoSecurity },
];

interface LegalPageLayoutProps {
  children: React.ReactNode;
}

const LegalPageLayout = ({ children }: LegalPageLayoutProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <LegalHero />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 py-20 px-[10px] sm:px-[35px] lg:px-[100px]">
          <aside className="md:col-span-1">
            <div className="sticky top-28">
              <h3 className="text-title-medium sm:text-headline-medium lg:text-display-small font-semibold text-neutral-variant-30 mb-4">
                ON THIS PAGE
              </h3>
              <nav>
                <ul>
                  {legalSections.map((section) => (
                    <li key={section.link}>
                      <Link
                        href={section.link}
                        className={cn(
                          "block py-8 text-neutral-variant-10 border-l-2 border-neutral-variant-30 pl-4 transition-all duration-200 hover:text-black",
                          {
                            "text-primary-base border-primary-base font-semibold":
                              currentPath === section.link,
                          }
                        )}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <main className="md:col-span-2 prose max-w-none text-black list-disc marker:text-black">
            {children}
          </main>
        </div>
    </>
  );
};

export default LegalPageLayout;