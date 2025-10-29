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
