import ServiceCard from "@/components/active-services/ServiceCard";
// Import your background images for all 9 cards
import VisaImage from "@/img/services/Service 7.png";
import LoanImage from "@/img/services/Service Nine.png";
import AgentVerificationImage from "@/img/services/Service One.png";
import DocumentVerificationImage from "@/img/services/Service eight.png";
import ScamAlertImage from "@/img/services/Service five.png";
import SupportImage from "@/img/services/Service four.png";
import ConsultationImage from "@/img/services/Services Two.png";
import ProjectManagementImage from "@/img/services/Service three.png";
import PostRelocationImage from "@/img/services/Service Six.png";

const servicesData = [
  {
    bgImage: VisaImage,
    subtitle: "Visa Interview Prep",
    description:
      "Practice with our experts to boost your confidence and increase approval chances",
    title: "VISA",
    href: "/services/visa-prep",
  },
  {
    bgImage: LoanImage,
    subtitle: "Zero Collateral Loans",
    description:
      "Apply for verified education loans with no collateral required.",
    title: "FINANCIAL LOAN",
    href: "/services/loans",
  },
  {
    bgImage: AgentVerificationImage,
    subtitle: "Agent Verification Services",
    description: "Find trusted migration agents near you - avoid scams",
    title: "AGENT VERIFICATION",
    href: "/services/agent-verification",
  },
  {
    bgImage: DocumentVerificationImage,
    subtitle: "Document Verification",
    description: "Get your forms and credentials validated before submission.",
    title: "VERIFY DOCUMENTS",
    href: "/services/document-verification",
  },
  {
    bgImage: ScamAlertImage,
    subtitle: "SCAM ALERT",
    description: "Report a scam or check fraud alerts to stay protected.",
    title: "REPORT SCAM",
    href: "/services/scam-alert",
  },
  {
    bgImage: SupportImage,
    subtitle: "Post-Visa Denial Support",
    description: "Get help with your next steps after a visa denial.",
    title: "SUPPORT",
    href: "/services/denial-support",
  },
  {
    bgImage: ConsultationImage,
    subtitle: "Consultation Services",
    description: "Ask questions and get expert advice tailored to your journey",
    title: "BOOK A SESSION",
    href: "/services/consultation",
  },
  {
    bgImage: ProjectManagementImage,
    subtitle: "Diaspora Project Management",
    description: "We help oversee your projects back home while you're abroad.",
    title: "PROJECT MANAGEMENT",
    href: "/services/project-management",
  },
  {
    bgImage: PostRelocationImage,
    subtitle: "Post-Relocation Support",
    description: "Access ongoing support after relocation — stay connected.",
    title: "POST RELOCATION",
    href: "/services/post-relocation",
  },
];

// Helper function to group data into chunks
function chunkArray(array: any[], size: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const ServiceGrid = () => {
  const serviceGroups = chunkArray(servicesData, 3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {serviceGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Tall Card (First item of the group) */}
            {group[0] && (
              <ServiceCard
                {...group[0]}
                // A calculated height that matches two small cards + the gap
                className="h-[34rem] md:h-[calc(40rem+1rem)]"
              />
            )}

            {/* Container for the two smaller cards */}
            <div className="flex flex-col gap-4">
              {group[1] && <ServiceCard {...group[1]} className="h-80" />}
              {group[2] && <ServiceCard {...group[2]} className="h-80" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
