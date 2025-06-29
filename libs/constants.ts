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
import VerifyServiceOne from "@/img/verify/verify_1.svg?url";
import VerifyServiceTwo from "@/img/verify/verify_2.svg?url";
import VerifyServiceThree from "@/img/verify/verify_3.svg?url";
import ReportServiceOne from "@/img/report/report_1.svg?url";
import ReportServiceTwo from "@/img/report/report_2.svg?url";
import ReportServiceThree from "@/img/report/report_3.svg?url";

interface FaqInterface {
  question: string;
  answer: string;
}

export interface ServicesInterface {
  title: string;
  description: string;
  image?: StaticImport;
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

export const interViewPrepsServiceData: ServicesInterface[] = [
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

export const verifyServiceData: ServicesInterface[] = [
  {
    title: "Embassy-Grade Checks",
    description:
      "We analyze your documents based on embassy-specific requirements for each country and visa type — spotting errors, omissions, or inconsistencies before they cost you a denial.",
    image: VerifyServiceOne,
  },
  {
    title: "Academic & Financial Accuracy",
    description:
      "Whether it's transcripts, bank statements, or sponsorship letters — we make sure every detail is aligned with international standards, reducing your chances of being flagged for scrutiny.",
    image: VerifyServiceTwo,
  },
  {
    title: "Real-Time Feedback & Fixes",
    description:
      "Upload your documents and get instant suggestions on what needs updating, formatting, or clarification — all backed by years of immigration insights.",
    image: VerifyServiceThree,
  },
];

export const reportServiceData: ServicesInterface[] = [
  {
    title: "Real-Time Scam Alerts",
    description:
      "Receive instant notifications about trending visa scams, fake agents, and fraud patterns. Our growing database is updated by real users, our verification team, and AI-powered tracking",
    image: ReportServiceOne,
  },
  {
    title: "Report a Scammer, Save Someone Else",
    description:
      "If you've been targeted by a scammer or spotted suspicious activity, our secure reporting tool lets you anonymously alert the community — and help take them down.",
    image: ReportServiceTwo,
  },
  {
    title: "Crowd-Verified Safety",
    description:
      "See agent flags, scam histories, and verified warnings from other users before you pay anyone. With community-powered protection, you’re never in this alone.",
    image: ReportServiceThree,
  },
];

export const denialFeaturesData: ServicesInterface[] = [
  {
    title: "Second-Chance Strategy.",
    description: "Get a tailored action plan that includes revised documents, alternate visa options, and reapplication timelines.",
  },
  {
    title: "Rejection Debrief Sessions",
    description: "Book a quick session with a visa prep expert to understand what to change for your next interview.",
  },
  {
    title: "Reapplication Assistance",
    description: "We help you gather updated documents, refine your statements, and prepare a stronger case.",
  },
  {
    title: "Letter of Explanation Templates",
    description: "Use professionally crafted samples to write compelling reapplication cover letters or appeals.",
  },
  {
    title: "Support from real people.",
    description: "Talk to relocation experts who’ve helped others bounce back after rejections—because we’ve been there too.",
  },
];

export const denialHowToData: { title: string; description: string }[] = [
  {
    title: "Share your rejection details.",
    description: "Upload your refusal notice and interview experience",
  },
  {
    title: "Let our agent explain what went wrong",
    description: "You'll get an instant breakdown with smart next steps.",
  },
  {
    title: "Meet with a visa strategist.",
    description: "We’ll help you pivot and prepare for your next shot.",
  },
  {
    title: "Submit stronger documents",
    description: "Fix your weak spots and fill the gaps in your application.",
  },
  {
    title: "Reapply with confidence",
    description: "Take your next chance, this time better equipped.",
  },
];

export const projectManagementFeaturesData: ServicesInterface[] = [
  {
    title: "Property Development",
    description:
      "Oversee construction, repairs, and upgrades—from land clearing to final finishing.",
  },
  {
    title: "Business Setup & Operations",
    description:
      "Launch and run ventures like farms, salons, or rental properties with a dedicated local manager.",
  },
  {
    title: "Assigned Local Project Manager",
    description:
      "A certified professional negotiates with vendors, supervises work crews, and enforces quality standards.",
  },
  {
    title: "Transparent Financial Tracking",
    description:
      "Access itemized receipts, budget breakdowns, and payment logs—no surprises, ever.",
  },
  {
    title: "Verified Vendors & Artisans.",
    description:
      "We partner only with pre‐vetted contractors—no inflated costs, no shoddy work.",
  },
];

export const projectManagementHowToData: { title: string; description: string }[] = [
  {
    title: "Submit Your Project Brief.",
    description:
      "Tell us your goals, budget, and timeline—land purchase, renovation, or business launch.",
  },
  {
    title: "Match with a Local Manager.",
    description:
      "Get an initial plan, vendor shortlist, and estimated schedule for your approval.",
  },
  {
    title: "Receive Kickoff Report.",
    description:
      "Get an initial plan, vendor shortlist, and estimated schedule for your approval.",
  },
  {
    title: "Approve Milestones Online.",
    description:
      "Every phase—from material procurement to finishing touches—is logged and sent for your review.",
  },
  {
    title: "Finalize & Complete.",
    description:
      "Once the project meets your specifications, we hand over all documents, keys, and project files.",
  },
];

export const consultationFeaturesData: { title: string; description: string }[] = [
  {
    title: "Visa Pathway Assessment",
    description:
      "Find out which visa routes are open to you based on your profile, education, financials, and travel history.",
  },
  {
    title: "Document Checklist Review",
    description:
      "Have an expert double-check your academic, financial, or identity documents to avoid red flags.",
  },
  {
    title: "Country-Specific Guidance",
    description:
      "Get insights into embassy behavior, application timelines, and success strategies based on your destination.",
  },
  {
    title: "Rejection Diagnosis",
    description:
      "If you’ve faced denial before, we’ll help you understand what went wrong and how to improve on your next attempt.",
  },
  {
    title: "Study/Work/Family Route Planning",
    description:
      "Explore the best relocation options based on your goals, including sponsorships, skilled migration, or student visas.",
  },
];

export const consultationHowToData: {
  title: string;
  description: string;
}[] = [
  {
    title: "Choose Your Session Type",
    description:
      "Select from Express Q&A (15 min), Full Strategy (30–45 min), or Ongoing Guidance (monthly plan).",
  },
  {
    title: "Match with a Verified Consultant",
    description:
      "Based on your profile and migration goal, we assign a seasoned advisor in your destination region.",
  },
  {
    title: "Join the Virtual Call",
    description:
      "Sessions are held via Zoom, Google Meet, or voice call—your preference.",
  },
  {
    title: "Receive a Summary & Action Plan",
    description:
      "After your session, get a written summary with checklists, links, and your next steps.",
  }
];

export const postRelocationFeaturesData: ServicesInterface[] = [
  {
    title: "Housing and Shelter Assistance",
    description:
      "We’ll guide you in finding affordable, safe housing options—short-term or long-term—near your school or workplace.",
  },
  {
    title: "Legal Aid and Immigration Help",
    description:
      "Need to understand your residency rights, work eligibility, or face legal issues abroad? We connect you to affordable legal professionals who specialize in migration law.",
  },
  {
    title: "Emergency Contact Resources",
    description:
      "Gain access to trusted embassies, campus advisors, and local help centers in case of emergencies.",
  },
  {
    title: "Nigerian Diaspora Circles",
    description:
      "Join regional groups of fellow Nigerians to share tips, job leads, cooking parties, emotional support, and more.",
  },
  {
    title: "Employment and Career Tips",
    description:
      "Get updates on part-time jobs, career events, and CV writing workshops from within your local community.",
  },
];