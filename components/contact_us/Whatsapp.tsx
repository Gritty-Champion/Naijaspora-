import whatsapp from "@/img/contact_us/whatsapp.svg?url";
import Image from "next/image";
import Button from "@/components/Button";

const WhatsAppChat: React.FC = () => {
  const whatsappUrl = `https://wa.me/2348012345678`;

  
const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white px-4 sm:px-32 py-6 sm:py-8 w-full font-montserrat">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-display-medium text-black mb-2 font-semibold font-montserrat">
            Reach Out on WhatsApp
          </h2>
          <p className="text-headline-medium text-black mb-2 font-medium">
            Prefer chatting? We&apos;re just a message away.
          </p>
          <p className="text-headline-medium text-black mb-6 font-medium">
            Tap below to speak with a NaijaSpora support agent via WhatsApp.
          </p>

          <Button
            onClick={handleClick}
            variant="primary"
            size="lg"
            className="!rounded-full"
          >
            Chat on WhatsApp
          </Button>
        </div>

        <div className="flex-shrink-0">
          <Image
            src={whatsapp}
            alt="WhatsApp Icon"
            width={128}
            height={128}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;