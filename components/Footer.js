import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiAppstore } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className=" ">
      <div className='py-14 px-4 md:px-10 lg:px-20 2xl:px-40 bg-primary text-white'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <p className="mb-6">Your trusted bridge for safe, successful, and scam-free relocation & diaspora support.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-200">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <SiAppstore size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
              <li><Link href="/services" className="hover:text-gray-200">Services</Link></li>
              <li><Link href="/scam-alert" className="hover:text-gray-200">Scam Alert</Link></li>
              <li><Link href="/blog" className="hover:text-gray-200">Blog</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/visa-interview-prep" className="hover:text-gray-200">Visa Interview Prep</Link></li>
              <li><Link href="/agent-verification" className="hover:text-gray-200">Agent Verification</Link></li>
              <li><Link href="/emergency-services" className="hover:text-gray-200">Emergency Services</Link></li>
              <li><Link href="/all-services" className="hover:text-gray-200">All Services</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@naijaspora.com" className="hover:text-gray-200">info@naijaspora.com</a></li>
              <li>Phone: <a href="tel:+234800NAIJA-HELP" className="hover:text-gray-200">+234 800 NAIJA-HELP</a></li>
              <li><Link href="/contact" className="hover:text-gray-200">Contact Form</Link></li>
              <li><Link href="/emergency" className="hover:text-gray-200">Emergency Line</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <div className=''>
        {/* Bottom Bar */}
        <div className="px-4 md:px-10 lg:px-20 2xl:px-40 h-[82px] content-center mt-8 bg-[#F5F5F7] flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Naijaspora. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:border-black border-b border-transparent transition-all duration-500">Terms of Service</Link>
            <Link href="/privacy" className="hover:border-black border-b border-transparent transition-all duration-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
