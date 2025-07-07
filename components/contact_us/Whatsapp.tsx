import whatsapp from "@/img/contact_us/whatsapp.svg?url";
import Image from "next/image";

const WhatsAppChat: React.FC = () => {
  const whatsappUrl = `https://wa.me/2348012345678`;

  return (
    <div className="bg-white p-6 sm:py-8 w-full sm:px-32">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-[45px] font-medium text-gray-900 mb-2">
            Reach Out on WhatsApp
          </h2>
          <p className="text-gray-600  mb-2 sm:text-[28px]">
            Prefer chatting? We&apos;re just a message away.
          </p>
          <p className="text-gray-600  mb-6 sm:text-[28px]">
            Tap below to speak with a NaijaSpora support agent via WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-base text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-[#5A0B94] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex-shrink-0">
          <Image
            src={whatsapp}
            alt="WhatsApp Icon"
            width={100}
            height={100}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;