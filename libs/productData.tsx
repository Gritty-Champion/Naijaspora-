import { ProductTyping } from "@/providers/ProductsProvider";

enum feedBackEnum {
  DROPDOWN = "dropdown",
  RADIO = "radio",
  TEXT = "text",
  DATE = "date",
  CHECKBOX = "checkbox",
  COUNTRY = "country",
}

export const productsData = {
  /* -------------------------- VISA PREPS -------------------------- */
  [ProductTyping.VISA_PREPS]: {
    general: [
      {
        question: "What type of visa are you applying for?",
        type: feedBackEnum.DROPDOWN,
        helpText: "Select your visa type from the dropdown list",
        answer: [
          "Study",
          "Work",
          "Visitor",
          "Family",
          "Skilled Worker",
          "Business",
          "Other — specify",
        ],
      },
      {
        question: "What country are you applying to?",
        type: feedBackEnum.TEXT,
        helpText: "Enter the destination country name",
      },
    ],

    study: [
      {
        question: "Are you admitted to a program/institution?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Name of institution / school",
        type: feedBackEnum.TEXT,
        helpText: "Enter full institution name",
      },
      {
        question: "Program name & level",
        type: feedBackEnum.TEXT,
        helpText: "e.g. BSc Nursing, Master of Data Science",
      },
      {
        question: "Program start date",
        type: feedBackEnum.DATE,
        helpText: "Pick the date your program starts",
      },
      {
        question: "Type of offer received",
        type: feedBackEnum.RADIO,
        helpText: "Select the applicable offer type",
        answer: ["Conditional Offer", "Unconditional Offer", "Acceptance Letter"],
      },
      {
        question: "Is your tuition paid / deposit paid?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes, No, or Partially",
        answer: ["Yes", "No", "Partially"],
      },
      {
        question: "Did you receive any scholarships/financial aid?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Do you need help with proof of funds or no-collateral loan?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
    ],

    other: [
      {
        question: "Have you previously traveled abroad?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "List countries visited in last 10 years",
        type: feedBackEnum.TEXT,
        helpText: "Enter country names separated by commas",
      },
      {
        question: "Have you ever been refused a visa for any country?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Have you ever been banned from entering any country?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Have you ever been deported or removed from a country?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Do you have any pending immigration or asylum applications elsewhere?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Have you previously overstayed a visa?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
    ],

    last_batch: [
      {
        question: "Have you booked your visa interview yet?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, what is your interview date?",
        type: feedBackEnum.DATE,
        helpText: "Select the scheduled interview date",
      },
      {
        question: "Have you attended any previous visa interviews?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, what was the outcome?",
        type: feedBackEnum.RADIO,
        helpText: "Select the result of your past interview",
        answer: ["Approved", "Refused"],
      },
      {
        question: "What areas do you feel you need help with most?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        helpText: "Select one or more areas where you need support",
        answer: ["Confidence", "Common questions", "Documents", "Mock interview", "Other"],
      },
      {
        question: "Which interview format would you like?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        helpText: "Select your preferred interview preparation format(s)",
        answer: [
          "Mock oral interview (1:1)",
          "Group practice",
          "Recorded mock interview with feedback",
          "Document review only",
          "Q&A cheat sheet",
        ],
      },
      {
        question: "Preferred platform for the session",
        type: feedBackEnum.CHECKBOX,
        helpText: "Select the communication platform you prefer",
        answer: ["Zoom", "Google Meet", "WhatsApp call", "Phone call", "In-person if local"],
      },
      {
        question: "Have you read and agreed to Naijaspora’s Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        helpText: "Select I agree to confirm consent",
        answer: ["I agree", "No"],
      },
    ],
  },

  /* -------------------------- LOAN / POF -------------------------- */
  [ProductTyping.LOAN_POF]: {
    general: [
      {
        question: "Name of school or institution",
        type: feedBackEnum.TEXT,
        helpText: "Enter the full school name",
      },
      {
        question: "Country of school / destination country",
        type: feedBackEnum.TEXT,
        helpText: "Enter the country name",
      },
      { question: "Program level", type: feedBackEnum.TEXT, helpText: "e.g., BSc, MSc, PhD" },
      {
        question: "Program name",
        type: feedBackEnum.TEXT,
        helpText: "e.g., BSc Nursing, MSc Data Science",
      },
      {
        question: "Program start date",
        type: feedBackEnum.DATE,
        helpText: "Select the program start date",
      },
      {
        question: "How much is your tuition and living cost?",
        type: feedBackEnum.TEXT,
        helpText: "Enter the total cost (₦ or foreign currency)",
      },
      {
        question: "Is your offer conditional or unconditional?",
        type: feedBackEnum.RADIO,
        helpText: "Select the offer type",
        answer: ["Conditional", "Unconditional"],
      },
      {
        question: "What type of financial help do you need?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        helpText: "Select one or more options that apply",
        answer: [
          "Proof of funds only (for visa purpose)",
          "Tuition loan",
          "Living expense support",
          "All of the above",
          "Other (specify)",
        ],
      },
      {
        question: "Total amount needed (in either ₦ or foreign currency)",
        type: feedBackEnum.TEXT,
        helpText: "Enter the total amount required",
      },
      {
        question:
          "Do you have a guarantor or next of kin who is Permanent Resident or citizen of another country besides Nigeria (not collateral)?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question:
          "Do you authorize Naijaspora to verify your documents and share them with partner lenders or financial institutions for assessment?",
        type: feedBackEnum.RADIO,
        helpText: "Select I agree to authorize",
        answer: ["I agree"],
      },
      {
        question:
          "Have you or your sponsor ever been involved in any fraudulent activity, loan default, or financial dispute?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question:
          "Do you understand that falsified documents or incomplete information may lead to disqualification?",
        type: feedBackEnum.RADIO,
        helpText: "Select I understand to confirm",
        answer: ["I understand"],
      },
      {
        question: "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        helpText: "Select I agree to continue",
        answer: ["I agree"],
      },
    ],
  },

  /* ----------------------- AGENT VERIFICATION ----------------------- */
  [ProductTyping.AGENT_VERIFICATION]: {
    general: [
      {
        question: "Full Name of the Agent or Agency",
        type: feedBackEnum.TEXT,
        helpText: "Enter the full agent or agency name",
      },
      {
        question: "Agent's Phone Number(s)",
        type: feedBackEnum.TEXT,
        helpText: "Enter phone number(s) with country code",
      },
      {
        question: "Agent's Email Address",
        type: feedBackEnum.TEXT,
        helpText: "Enter a valid email address",
      },
      {
        question: "Agent's Office Address or Location",
        type: feedBackEnum.TEXT,
        helpText: "City, State, and Country",
      },
      {
        question: "What service is the agent offering?",
        type: feedBackEnum.TEXT,
        helpText: "Describe the service offered",
      },
      {
        question: "How did you find this agent?",
        type: feedBackEnum.TEXT,
        helpText: "e.g., referral, social media, website",
      },
      {
        question: "Agent's Website or Social Media Handle",
        type: feedBackEnum.TEXT,
        helpText: "Provide link or handle",
      },
      {
        question: "Does the agent claim to be affiliated with any company, school, or embassy?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, please provide the name of the organization or company",
        type: feedBackEnum.TEXT,
        helpText: "Enter the claimed affiliated company or organization name",
      },
      {
        question:
          "Has the agent provided you with any business identification, license, or certificate?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "What service is the agent providing for you?",
        type: feedBackEnum.DROPDOWN,
        helpText: "Select one option from the list",
        answer: [
          "Visa Processing",
          "School Admission",
          "Job Placement",
          "Housing Arrangement",
          "Sponsorship",
          "Other",
        ],
      },
      {
        question: "What country or city is this service related to?",
        type: feedBackEnum.TEXT,
        helpText: "Enter the country or city",
      },
      {
        question: "Has the agent asked for any upfront payment or deposit?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, how much and in what currency?",
        type: feedBackEnum.TEXT,
        helpText: "Enter amount and currency, e.g., $500 USD",
      },
      {
        question: "What payment method was suggested by the agent?",
        type: feedBackEnum.DROPDOWN,
        helpText: "Select from the dropdown",
        answer: ["Bank Transfer", "Cryptocurrency", "Western Union", "Cash", "PayPal", "Other"],
      },
      {
        question: "Has any money already been paid?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "If Yes, How Much",
        type: feedBackEnum.TEXT,
        helpText: "Enter amount and specify currency",
      },
      {
        question: "If yes, do you have any proof of payment?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Was any formal agreement, receipt, or contract signed?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question:
          "Would you like Naijaspora to contact the agent directly as part of the verification process?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Do you want your identity kept confidential during the verification?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        helpText: "Select I agree to continue",
        answer: ["I agree"],
      },
    ],
  },

  /* --------------------- DOCUMENT VERIFICATION --------------------- */
  [ProductTyping.DOCUMENTS_VERIFICATION]: {
    general: [
      {
        question: "What type of document or certificate would you like us to verify?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        helpText: "Select all applicable document types",
        answer: [
          "Certificate of Sponsorship (COS)",
          "Admission Letter or Offer of Admission",
          "Employment Letter / Job Offer",
          "Visa or Work Permit Document",
          "Invitation Letter",
          "School Transcript / Reference Letter",
          "Passport or ID Verification",
          "Bank Statement or Proof of Funds",
          "Other (please specify)",
        ],
      },
      {
        question: "Who issued the document you want verified?",
        type: feedBackEnum.TEXT,
        helpText: "Enter the full name of the issuing institution or organization",
      },
      {
        question: "What country is the issuing institution or organization based in?",
        type: feedBackEnum.TEXT,
        helpText: "Enter the country name",
      },
      {
        question:
          "Did you receive the document directly from the organization or through an intermediary?",
        type: feedBackEnum.RADIO,
        helpText: "Select Directly or Through intermediary",
        answer: ["Directly", "Through intermediary"],
      },
      {
        question: "If through someone else, provide their full name, email, and phone number",
        type: feedBackEnum.TEXT,
        helpText: "Enter name, email, and phone number separated by commas",
      },
      {
        question: "What do you want Naijaspora to verify specifically?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        helpText: "Select all applicable verification types",
        answer: [
          "Verify if the organization or issuer is legitimate",
          "Confirm the authenticity of signatures, seals, or letterheads",
          "Confirm that the reference number exists in the institution's record",
          "Check for signs of document manipulation or forgery",
          "Verify that the COS number is valid with the UK Home Office database",
          "Confirm that the offer or admission exists in the school's record",
          "Verify employer legitimacy and job existence",
          "Other(s)",
        ],
      },
      {
        question: "How urgent is your verification request?",
        type: feedBackEnum.DROPDOWN,
        helpText: "Select the preferred turnaround time",
        answer: ["Within 24 hours", "2-3 days", "1 week"],
      },
      {
        question:
          "Do you want Naijaspora to contact the issuing organization directly on your behalf?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question: "Should we keep your identity confidential when contacting them?",
        type: feedBackEnum.RADIO,
        helpText: "Select Yes or No",
        answer: ["Yes", "No"],
      },
      {
        question:
          "I confirm that all documents submitted are mine or provided with the owner's consent",
        type: feedBackEnum.RADIO,
        helpText: "Select I confirm to acknowledge ownership",
        answer: ["I confirm"],
      },
    ],
  },
};
