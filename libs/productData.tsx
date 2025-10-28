import { ProductTyping } from "@/providers/ProductsProvider";

enum feedBackEnum {
  DROPDOWN = "dropdown",
  RADIO = "radio",
  TEXT = "text",
  DATE = "date",
  CHECKBOX = "checkbox",
  COUNTRY = "country"
}

export const productsData = {
  [ProductTyping.VISA_PREPS]: {
    general: [
      {
        question: "What type of visa are you applying for?",
        type: feedBackEnum.DROPDOWN,
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
      },
    ],

    study: [
      {
        question: "Are you admitted to a program/institution?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Name of institution / school",
        type: feedBackEnum.TEXT,
        helpText: "if applying for study",
      },

      {
        question: "Program name & level",
        type: feedBackEnum.TEXT,
        helpText: "e.g. BSc Nursing, Master of Data Science",
      },

      {
        question: "Program start date",
        type: feedBackEnum.DATE,
      },

      {
        question: "Type of offer received",
        type: feedBackEnum.RADIO,
        answer: ["Conditional Offer", "Unconditional Offer", "Acceptance Letter"],
      },

      {
        question: "Is your tuition paid / deposit paid?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No", "Partially"],
      },

      {
        question: "Did you receive any scholarships/financial aid?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Do you need help with proof of funds or no-collateral loan?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
    ],

    other: [
      {
        question: "Have you previously traveled abroad?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Have you previously traveled abroad?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "List countries visited in last 10 years",
        type: feedBackEnum.TEXT,
      },

      {
        question: "Have you ever been refused a visa for any country?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Have you ever been banned from entering  any country?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Have you ever been deported or removed from a country?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Do you have any pending immigration or asylum applications elsewhere?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },

      {
        question: "Have you previously overstayed a visa?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
    ],

    last_batch: [
      {
        question: "Have you booked your visa interview yet?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, what is your interview date?",
        type: feedBackEnum.TEXT,
      },
      {
        question: "Have you attended any previous visa interviews?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
      {
        question: "If yes, what was the outcome?",
        type: feedBackEnum.RADIO,
        answer: ["Approved", "Refused"],
      },
      {
        question: "What areas do you feel you need help with most?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        answer: ["Confidence", "Common questions", "Documents", "Mock interview", "Other"],
      },
      {
        question: "Which interview format would you like?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
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
        answer: ["Zoom", "Google Meet", "WhatsApp call", "Phone call", "In-person if local"],
      },
      {
        question: "Have you read and agreed to Naijaspora’s Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        answer: ["I agree", "No"],
      },
    ],
  },

  [ProductTyping.LOAN_POF]: {
    general: [
      {
        question: "Name of school or institution",
        type: feedBackEnum.TEXT,
      },
      {
        question: "Country of school / destination country",
        type: feedBackEnum.TEXT,
      },
      {
        question: "Program level",
        type: feedBackEnum.TEXT,
        helpText: "e.g., BSc, MSc",
      },
      {
        question: "Program name",
        type: feedBackEnum.TEXT,
        helpText: "e.g., BSc Nursing, MSc Data Science",
      },
      {
        question: "Program start date",
        type: feedBackEnum.DATE,
      },
      {
        question: "How much is your tuition and living cost?",
        type: feedBackEnum.TEXT,
      },
      {
        question: "Is your offer conditional or unconditional?",
        type: feedBackEnum.RADIO,
        answer: ["Conditional", "Unconditional"],
      },
      {
        question: "What type of financial help do you need?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
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
      },
      {
        question:
          "Do you have a guarantor or next of kin who is Permanent Resident or citizen of another country besides Nigeria (not collateral)?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
      {
        question:
          "Do you authorize Naijaspora to verify your documents and share them with partner lenders or financial institutions for assessment?",
        type: feedBackEnum.RADIO,
        answer: ["I agree"],
      },
      {
        question:
          "Have you or your sponsor ever been involved in any fraudulent activity, loan default, or financial dispute?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"],
      },
      {
        question:
          "Do you understand that falsified documents or incomplete information may lead to disqualification?",
        type: feedBackEnum.RADIO,
        answer: ["I understand"],
      },
      {
        question: "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        answer: ["I agree"],
      },
    ],
  },

  [ProductTyping.AGENT_VERIFICATION]: {
    general: [
      {
        question: "Full Name of the Agent or Agency",
        type: feedBackEnum.TEXT
      },
      {
        question: "Agent's Phone Number(s)",
        type: feedBackEnum.TEXT
      },
      {
        question: "Agent's Email Address",
        type: feedBackEnum.TEXT
      },
      {
        question: "Agent's Office Address or Location",
        type: feedBackEnum.TEXT,
        helpText: "City, State, Country"
      },
      {
        question: "What service is the agent offering?",
        type: feedBackEnum.TEXT
      },
      {
        question: "How did you find this agent?",
        type: feedBackEnum.TEXT
      },
      {
        question: "Agent's Website or Social Media Handle",
        type: feedBackEnum.TEXT
      },
      {
        question: "Does the agent claim to be affiliated with any company, school, or embassy?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "If yes, please provide the name of the organization or company",
        type: feedBackEnum.TEXT
      },
      {
        question: "Has the agent provided you with any business identification, license, or certificate?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "What service is the agent providing for you?",
        type: feedBackEnum.DROPDOWN,
        answer: ["Visa Processing", "School Admission", "Job Placement", "Housing Arrangement", "Sponsorship", "Other"]
      },
      {
        question: "What country or city is this service related to?",
        type: feedBackEnum.TEXT
      },
      {
        question: "Has the agent asked for any upfront payment or deposit?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "If yes, how much and in what currency?",
        type: feedBackEnum.TEXT
      },
      {
        question: "What payment method was suggested by the agent?",
        type: feedBackEnum.DROPDOWN,
        answer: ["Bank Transfer", "Cryptocurrency", "Western Union", "Cash", "PayPal", "Other"]
      },
      {
        question: "Has any money already been paid?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "If Yes, How Much",
        type: feedBackEnum.TEXT,
        helpText: "Please indicate currency"
      },
      {
        question: "If yes, do you have any proof of payment?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "Was any formal agreement, receipt, or contract signed?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "Would you like Naijaspora to contact the agent directly as part of the verification process?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "Do you want your identity kept confidential during the verification?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?",
        type: feedBackEnum.RADIO,
        answer: ["I agree"]
      }
    ]
  },

  [ProductTyping.DOCUMENTS_VERIFICATION]: {
    general: [
      {
        question: "What type of document or certificate would you like us to verify?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        answer: [
          "Certificate of Sponsorship (COS)",
          "Admission Letter or Offer of Admission",
          "Employment Letter / Job Offer",
          "Visa or Work Permit Document",
          "Invitation Letter",
          "School Transcript / Reference Letter",
          "Passport or ID Verification",
          "Bank Statement or Proof of Funds",
          "Other (please specify)"
        ]
      },
      {
        question: "Who issued the document you want verified?",
        type: feedBackEnum.TEXT,
        helpText: "e.g., a university, employer, embassy, agent, or organization name"
      },
      {
        question: "What country is the issuing institution or organization based in?",
        type: feedBackEnum.TEXT
      },
      {
        question: "Did you receive the document directly from the organization or through an intermediary?",
        type: feedBackEnum.RADIO,
        answer: ["Directly", "Through intermediary"]
      },
      {
        question: "If through someone else, provide their full name, email, and phone number",
        type: feedBackEnum.TEXT
      },
      {
        question: "What do you want Naijaspora to verify specifically?",
        type: feedBackEnum.CHECKBOX,
        multiple: true,
        answer: [
          "Verify if the organization or issuer is legitimate",
          "Confirm the authenticity of signatures, seals, or letterheads",
          "Confirm that the reference number exists in the institution's record",
          "Check for signs of document manipulation or forgery",
          "Verify that the COS number is valid with the UK Home Office database",
          "Confirm that the offer or admission exists in the school's record",
          "Verify employer legitimacy and job existence",
          "Other(s)"
        ]
      },
      {
        question: "How urgent is your verification request?",
        type: feedBackEnum.DROPDOWN,
        answer: ["Within 24 hours", "2-3 days", "1 week"]
      },
      {
        question: "Do you want Naijaspora to contact the issuing organization directly on your behalf?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "Should we keep your identity confidential when contacting them?",
        type: feedBackEnum.RADIO,
        answer: ["Yes", "No"]
      },
      {
        question: "I confirm that all documents submitted are mine or provided with the owner's consent",
        type: feedBackEnum.RADIO,
        answer: ["I confirm"]
      }
    ]
  }
};
