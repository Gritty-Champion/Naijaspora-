import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { RiSearchLine, RiMenuFill } from "@remixicon/react";

const DashboardHeader = () => {
    return (
        <header className="bg-white border-b border-neutral-60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:block w-full max-w-sm">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <RiSearchLine className="text-neutral-50" />
                            </div>
                            <input
                                type="text"
                                placeholder="What Opportunity are you looking for"
                                className="w-full bg-neutral-90 rounded-full py-2 pl-10 pr-4 text-body-medium placeholder:text-neutral-60 focus:outline-none focus:ring-2 focus:ring-primary-base"
                            />
                        </div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/refer" className="hidden sm:flex items-center gap-2 text-black border rounded-full px-4 py-2 text-title-small font-medium hover:bg-primary-95 transition-colors">
                            <Image
                                src="/referrals.svg"
                                alt="Refer a Friend"
                                width={40}
                                height={40}
                                className="rounded-full h-6 w-6"
                            />
                            Refer a Friend
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-black border rounded-full px-4 py-1 text-title-small font-medium hover:bg-primary-95 transition-colors">
                            <RiMenuFill size={24} />
                            <div className="flex-shrink-0 text-white w-8 h-8  bg-neutral-10 rounded-full flex items-center justify-center text-body-small font-bold">
                                FJ
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
