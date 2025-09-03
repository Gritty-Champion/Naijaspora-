import Link from "next/link";
import { RiFacebookFill, RiTwitterXFill, RiInstagramLine, RiLinkedinFill } from "@remixicon/react";

const DashboardFooter = () => {
    return (
        <footer className="text-black text-body-medium font-regular">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6">
                   <div className="flex flex-col md:flex-row items-center gap-6">
                    <p className="text-black text-body-large font-regular flex items-center">
                       <span className="font-bold text-title-large">&copy;</span>&nbsp;{new Date().getFullYear()}&#x0020;NaijaSpora. All rights reserved
                    </p>
                    <div className="flex gap-6 text-body-large">
                        <Link href="/privacy" className="hover:text-primary-base">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary-base">Terms of Service</Link>
                        <Link href="/about" className="hover:text-primary-base">About</Link>
                        <Link href="/blog" className="hover:text-primary-base">Blog</Link>
                    </div>
                    </div>
                    <div className="flex gap-4 ">
                        <a href="#" className="hover:text-primary-base"><RiFacebookFill size={20} /></a>
                        <a href="#" className="hover:text-primary-base"><RiTwitterXFill size={20} /></a>
                        <a href="#" className="hover:text-primary-base"><RiInstagramLine size={20} /></a>
                        <a href="#" className="hover:text-primary-base"><RiLinkedinFill size={20} /></a>
                    </div>
                </div>
               
            </div>
        </footer>
    );
};

export default DashboardFooter;