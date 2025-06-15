import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import ConsultationServiceOne from "@/img/consultations/services_1.svg?url";
import ConsultationServiceTwo from "@/img/consultations/services_2.svg?url";
import ConsultationServiceThree from "@/img/consultations/services_3.svg?url";

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