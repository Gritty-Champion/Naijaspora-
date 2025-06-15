import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import ConsultationServiceOne from "@/img/consultations/services_1.svg?url";
import ConsultationServiceTwo from "@/img/consultations/services_2.svg?url";
import ConsultationServiceThree from "@/img/consultations/services_3.svg?url";
import FundingServiceOne from "@/img/funding/funding_1.svg?url";
import FundingServiceTwo from "@/img/funding/funding_2.svg?url";
import FundingServiceThree from "@/img/funding/funding_3.svg?url";
import AgentServiceOne from "@/img/agents/agent_1.svg?url";
import AgentServiceTwo from "@/img/agents/agent_2.svg?url";
import AgentServiceThree from "@/img/agents/agent_3.svg?url";

interface FaqInterface {
  question: string;
  answer: string;
}

export interface ServicesInterface {
  title: string;
  description: string;
  image: StaticImport;
}

export const faqData: FaqInterface[] = [
  {
    question: "Does Naijaspora offer help after I relocate?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet ab. Ut, repellat! Consectetur accusantium ut nesciunt exercitationem, cum illo iusto quasi. Id quidem omnis quas ratione minima enim aliquam.",
  },
  {
    question: "Can NaijaSpora help me verify a travel agent or COS document?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet ab. Ut, repellat! Consectetur accusantium ut nesciunt exercitationem, cum illo iusto quasi. Id quidem omnis quas ratione minima enim aliquam.",
  },
  {
    question: "What is NaijaSpora and who is it for?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet ab. Ut, repellat! Consectetur accusantium ut nesciunt exercitationem, cum illo iusto quasi. Id quidem omnis quas ratione minima enim aliquam.",
  },
  {
    question: "What should I do if I’ve already been scammed by an agent?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet ab. Ut, repellat! Consectetur accusantium ut nesciunt exercitationem, cum illo iusto quasi. Id quidem omnis quas ratione minima enim aliquam.",
  },
]; 

export const consultationServiceData: ServicesInterface[] = [
  {
    title: "Affordable, Professional Coaching",
    description:
      "Get high-quality prep from relocation experts and ex-visa officers — without paying exorbitant consultant fees",
    image: ConsultationServiceOne,
  },
  {
    title: "Built Around Your Visa Type",
    description:
      "Whether you're applying for a student, tourist, or work visa, your coaching is modeled after actual embassy interviews and country-specific expectations.",
    image: ConsultationServiceTwo,
  },
  {
    title: "Real-Time Feedback. Real Results",
    description:
      "Get instant feedback on your answers, posture, and tone so you can walk into your appointment 100% ready.",
    image: ConsultationServiceThree,
  },
];

export const fundingServiceData: ServicesInterface[] = [
  {
    title: "Quick Access to Travel Loans",
    description:
      "Whether you're planning to study abroad, attend a conference, or relocate, you can access loan options without pledging property or assets.",
    image: FundingServiceOne,
  },
  {
    title: "Tailored for Students & First-Time Travelers",
    description:
      "Our lending partners specialize in loans for young adults starting their global journey — no corporate credit history required.",
    image: FundingServiceTwo,
  },
  {
    title: "Low Rates. Transparent Terms",
    description:
      "Say goodbye to shady loan sharks. NaijaSpora only partners with licensed financial providers that offer fair interest rates and clear repayment schedules",
    image: FundingServiceThree,
  },
];

export const agentServiceData: ServicesInterface[] = [
  {
    title: "Verified Agents. Zero Guesswork.",
    description:
      "We perform background checks and performance assessments before listing any agent. Only genuine, accountable professionals make it to our network — giving you peace of mind and real results.",
    image: AgentServiceOne,
  },
  {
    title: "Direct Contact. Real Support.",
    description:
      "Chat with verified agents directly on NaijaSpora. Ask questions, compare services, and track responses all in one place — no more shady WhatsApp links or fake office addresses.",
    image: AgentServiceTwo,
  },
  {
    title: "Transparent Reviews & Ratings",
    description:
      "We collect feedback from real users and display honest reviews to help you make better decisions. Choose agents with proven success in your visa type or travel destination.",
    image: AgentServiceThree,
  },
];