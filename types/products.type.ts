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
