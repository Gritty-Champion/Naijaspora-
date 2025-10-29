interface VisaPrepsProps {
  visa_type: string;
  destination_country: string;
  is_admitted?: boolean;
  institution_name?: string;
  program_name?: string;
  program_start_date?: Date;
  offer_type?: string;
  tuition_paid?: string;
  scholarship?: {
    hasScholarship: boolean;
    details: string;
  };
  proof_of_funds_help?: boolean;
  previous_travel?: {
    hasTraveled: boolean;
    details: string;
  };
  visa_refused?: boolean;
  banned?: boolean;
  deported?: boolean;
  pending_asylum?: boolean;
  overstayed?: boolean;
  interview_booked?: boolean;
  interview_date?: Date;
  areas_of_help?: string[];
  interview_format?: string[];
  platform?: string[];
  agreed_terms: boolean;
}

interface AgentVerificationProps {
  agent_name: string;
  agent_phone: string;
  agent_email?: string;
  agent_address?: string;
  service_offered: string;
  referral_source?: string;
  website_or_social?: string;
  claims_affiliation?: boolean;
  affiliated_company?: string;
  has_license?: boolean;
  requested_service: string;
  related_country?: string;
  upfront_payment?: boolean;
  payment_amount?: string;
  payment_currency?: string;
  payment_method?: string;
  payment_proof?: boolean;
  signed_agreement?: boolean;
  allow_contact_agent?: boolean;
  keep_confidential?: boolean;
  agreed_terms: boolean;
}

type UrgencyOption = "24h" | "2-3 days" | "1 week";

interface DocumentVerificationProps {
  document_types: string[]; // required
  issuer_name: string; // required
  issuer_country: string; // required
  received_via: "Direct" | "Intermediary"; // required
  intermediary_name?: string;
  intermediary_email?: string;
  intermediary_phone?: string;
  uploaded_file?: string; // URL or file identifier depending on your upload flow
  verification_checks?: string[]; // e.g., ["Confirm authenticity", ...]
  urgency?: UrgencyOption;
  allow_contact_issuer?: boolean;
  keep_confidential?: boolean;
  confirm_ownership: boolean; // required
}

interface LoanApplicationProps {
  institution_name: string;
  country_of_school: string;
  program_level: string;
  program_name: string;
  program_start_date: Date;
  tuition_and_living_cost: number;
  offer_status: "Conditional" | "Unconditional";
  financial_help: string[];
  total_amount_needed: string;
  has_guarantor_abroad: boolean;
  authorize_verification: boolean;
  fraud_history: boolean;
  understands_disqualification: boolean;
  agreed_terms: boolean;
}
