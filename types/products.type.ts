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

interface ScamAlertProps {
  reporting_for: "Yourself" | "Someone else";
  current_location: string;
  country_if_abroad?: string;
  scammer_name?: string;
  scammer_phone?: string;
  scammer_email?: string;
  scammer_social?: string;
  service_claimed?: string;
  scammer_location?: string;
  connection_source?: string[];
  incident_date?: string;
  incident_description: string;
  registration_documents?: boolean;
  payment_made?: boolean;
  payment_amount?: string;
  payment_method?: string[];
  payment_proof?: boolean;
  evidence_uploaded?: string[];
  loss_type?: string[];
  interaction_result?: string[];
  desired_action?: string[];
  allow_contact_scammer?: boolean;
  keep_confidential?: boolean;
  contact_preference?: string[];
  confirm_truth: boolean;
  agreed_terms: boolean;
}

interface PostVisaDenialProps {
  denial_country: string;
  banned_from_applying?: boolean;
  visa_type?: string[];
  used_agent?: boolean;
  agent_naijaspora_verified?: boolean;
  attended_physical_interview?: boolean;
  interview_location?: string;
  first_refusal?: boolean;
  previous_denials_count?: string;
  denial_reasons?: string[];
  applied_with_dependents?: string;
  support_needed?: string[];
  consultation_format?: string[];
  confirm_truth: boolean;
  agreed_terms: boolean;
}

interface ConsultationProps {
  current_location: string;
  country_if_abroad?: string;
  consultation_type: string[];
  target_country?: string;
  situation_description: string;
  main_questions?: string;
  urgency?: string;
  consultation_style?: string[];
  contact_method?: string[];
  preferred_datetime?: string;
  keep_confidential?: boolean;
  referral_source?: string[];
  confirm_accuracy: boolean;
  agreed_terms: boolean;
}

interface PostRelocationProps {
  relocation_country: string;
  city_state?: string;
  arrival_date?: string;
  visa_type?: string[];
  relocated_with_dependents?: string;
  accommodation_situation?: string[];
  used_agent?: boolean;
  agent_naijaspora_verified?: boolean;
  agent_details?: string;
  job_help_needed?: string[];
  services_needed?: string[];
  challenges_faced?: string[];
  consultation_format?: string[];
  preferred_time?: string;
  referral_source?: string[];
  additional_comments?: string;
  confirm_accuracy: boolean;
  agreed_terms: boolean;
}

interface DiasporaProjectProps {
  country_of_residence: string;
  contact_method?: string[];
  project_type: string[];
  project_description: string;
  project_location: string;
  expected_start_date?: string;
  project_status?: "New" | "Ongoing";
  project_progress?: string;
  tasks_to_handle?: string[];
  update_frequency?: string;
  update_format?: string[];
  local_representative?: boolean;
  representative_details?: string;
  existing_contractors?: boolean;
  contractor_details?: string;
  expected_deliverables?: string[];
  timeline_expectation?: string;
  timeline_date?: string;
  keep_confidential?: boolean;
  security_concerns?: string;
  confirm_accuracy: boolean;
  agreed_terms: boolean;
  referral_source?: string[];
  additional_notes?: string;
}
