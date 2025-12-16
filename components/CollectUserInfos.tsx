import React, { useState, useMemo, useEffect, useCallback } from "react";
import ReactFlagsSelect from "react-flags-select";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftLine } from "@remixicon/react";

import Button from "./Button";
import { cn } from "@/libs/cn";
import { useProducts } from "@/hooks/useProducts";
import { ProductTyping } from "@/providers/ProductsProvider";
import { productsData } from "@/libs/productData";

type AnswerMap = Record<string, string | string[]>;

type Question = {
  question?: string;
  type: string;
  answer?: string[];
  helpText?: string;
  multiple?: boolean;
};

const CollectUserInfos = ({ open }: { open: boolean }) => {
  const { submitProduct, productType, submitSuccess } = useProducts();
  const [questionStep, setQuestionStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [visaType, setVisaType] = useState<string | null>(null);

  const handleSubmit = () => {
    if (productType === ProductTyping.VISA_PREPS) {
      const data: VisaPrepsProps = {
        visa_type: (answers["What type of visa are you applying for?"] as string) || "",
        destination_country: (answers["What country are you applying to?"] as string) || "",
        is_admitted: (answers["Are you admitted to a program/institution?"] as string) === "Yes",
        institution_name: answers["Name of institution / school"] as string,
        program_name: answers["Program name & level"] as string,
        program_start_date: answers["Program start date"]
          ? new Date(answers["Program start date"] as string)
          : undefined,
        offer_type: answers["Type of offer received"] as string,
        tuition_paid: answers["Is your tuition paid / deposit paid?"] as string,
        scholarship: {
          hasScholarship:
            (answers["Did you receive any scholarships/financial aid?"] as string) === "Yes",
          details:
            (answers["Did you receive any scholarships/financial aid?"] as string) === "Yes"
              ? "Yes"
              : "No",
        },
        proof_of_funds_help:
          (answers["Do you need help with proof of funds or no-collateral loan?"] as string) ===
          "Yes",
        previous_travel: {
          hasTraveled: (answers["Have you previously traveled abroad?"] as string) === "Yes",
          details: answers["List countries visited in last 10 years"] as string,
        },
        visa_refused:
          (answers["Have you ever been refused a visa for any country?"] as string) === "Yes",
        banned:
          (answers["Have you ever been banned from entering  any country?"] as string) === "Yes",
        deported:
          (answers["Have you ever been deported or removed from a country?"] as string) === "Yes",
        pending_asylum:
          (answers[
            "Do you have any pending immigration or asylum applications elsewhere?"
          ] as string) === "Yes",
        overstayed: (answers["Have you previously overstayed a visa?"] as string) === "Yes",
        interview_booked: (answers["Have you booked your visa interview yet?"] as string) === "Yes",
        interview_date: answers["If yes, what is your interview date?"]
          ? new Date(answers["If yes, what is your interview date?"] as string)
          : undefined,
        areas_of_help: answers["What areas do you feel you need help with most?"] as
          | string[]
          | undefined,
        interview_format: answers["Which interview format would you like?"] as string[] | undefined,
        platform: answers["Preferred platform for the session"] as string[] | undefined,
        agreed_terms:
          (answers[
            "Have you read and agreed to Naijaspora’s Terms of Service and Privacy Policy?"
          ] as string) === "I agree",
      };
      submitProduct(data);
    }

    if (productType === ProductTyping.AGENT_VERIFICATION) {
      const data: AgentVerificationProps = {
        agent_name: (answers["Full Name of the Agent or Agency"] as string) || "",
        agent_phone: (answers["Agent's Phone Number(s)"] as string) || "",
        agent_email: (answers["Agent's Email Address"] as string) || "",
        agent_address: (answers["Agent's Office Address or Location"] as string) || "",
        service_offered: (answers["What service is the agent offering?"] as string) || "",
        referral_source: (answers["How did you find this agent?"] as string) || "",
        website_or_social: (answers["Agent's Website or Social Media Handle"] as string) || "",
        claims_affiliation:
          (answers[
            "Does the agent claim to be affiliated with any company, school, or embassy?"
          ] as string) === "Yes",
        affiliated_company:
          (answers["If yes, please provide the name of the organization or company"] as string) ||
          "",
        has_license:
          (answers[
            "Has the agent provided you with any business identification, license, or certificate?"
          ] as string) === "Yes",
        requested_service:
          (answers["What service is the agent providing for you?"] as string) || "",
        related_country:
          (answers["What country or city is this service related to?"] as string) || "",
        upfront_payment:
          (answers["Has the agent asked for any upfront payment or deposit?"] as string) === "Yes",
        payment_amount: (answers["If yes, how much and in what currency?"] as string) || "",
        payment_method:
          (answers["What payment method was suggested by the agent?"] as string) || "",
        // money_paid: (answers["Has any money already been paid?"] as string) === "Yes",
        // paid_amount: (answers["If Yes, How Much"] as string) || "",
        payment_proof: (answers["If yes, do you have any proof of payment?"] as string) === "Yes",
        signed_agreement:
          (answers["Was any formal agreement, receipt, or contract signed?"] as string) === "Yes",
        allow_contact_agent:
          (answers[
            "Would you like Naijaspora to contact the agent directly as part of the verification process?"
          ] as string) === "Yes",
        keep_confidential:
          (answers[
            "Do you want your identity kept confidential during the verification?"
          ] as string) === "Yes",
        agreed_terms:
          (answers[
            "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"
          ] as string) === "I agree",
      };

      submitProduct(data);
    }

    if (productType === ProductTyping.DOCUMENTS_VERIFICATION) {
      const docTypes =
        (answers[
          "What type of document or certificate would you like us to verify?"
        ] as string[]) || [];

      const issuerName = (answers["Who issued the document you want verified?"] as string) || "";
      const issuerCountry =
        (answers["What country is the issuing institution or organization based in?"] as string) ||
        "";

      const receivedViaRaw =
        (answers[
          "Did you receive the document directly from the organization or through an intermediary?"
        ] as string) || "Direct";

      // Normalize to the backend enum
      const received_via: DocumentVerificationProps["received_via"] =
        receivedViaRaw === "Through intermediary" ? "Intermediary" : "Direct";

      // The intermediary question expects "full name, email, and phone number" in a single text input per earlier suggestion.
      // If your UI captures them separately, map accordingly. Here we attempt to parse a comma-separated string.
      const intermediaryRaw =
        (answers[
          "If through someone else, provide their full name, email, and phone number"
        ] as string) || "";

      let intermediary_name: string | undefined;
      let intermediary_email: string | undefined;
      let intermediary_phone: string | undefined;

      if (intermediaryRaw) {
        // Try to split by comma (name, email, phone). Fallback to putting entire string in name.
        const parts = intermediaryRaw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        if (parts.length === 1) {
          intermediary_name = parts[0];
        } else if (parts.length === 2) {
          intermediary_name = parts[0];
          intermediary_email = parts[1];
        } else if (parts.length >= 3) {
          intermediary_name = parts[0];
          intermediary_email = parts[1];
          intermediary_phone = parts.slice(2).join(", ");
        }
      }

      const verification_checks =
        (answers["What do you want Naijaspora to verify specifically?"] as string[]) || [];

      const data: DocumentVerificationProps = {
        document_types: docTypes,
        issuer_name: issuerName,
        issuer_country: issuerCountry,
        received_via,
        intermediary_name,
        intermediary_email,
        intermediary_phone,
        uploaded_file: (answers["Upload the document you want verified"] as string) || undefined,
        verification_checks,
        urgency:
          (answers[
            "How urgent is your verification request?"
          ] as string as DocumentVerificationProps["urgency"]) || "2-3 days",
        allow_contact_issuer:
          (answers[
            "Do you want Naijaspora to contact the issuing organization directly on your behalf?"
          ] as string) === "Yes",
        keep_confidential:
          (answers["Should we keep your identity confidential when contacting them?"] as string) ===
          "Yes",
        confirm_ownership:
          (answers[
            "I confirm that all documents submitted are mine or provided with the owner's consent"
          ] as string) === "I confirm",
      };

      // optional: basic validation before submit
      if (!data.document_types.length || !data.issuer_name || !data.issuer_country) {
        console.warn("Missing required document verification fields", data);
        // show UI error or prevent submission
        return;
      }

      submitProduct(data);
    }

    if (productType === ProductTyping.LOAN_POF) {
      const data: LoanApplicationProps = {
        institution_name: (answers["Name of school or institution"] as string) || "",
        country_of_school: (answers["Country of school / destination country"] as string) || "",
        program_level: (answers["Program level"] as string) || "",
        program_name: (answers["Program name"] as string) || "",
        program_start_date: new Date(answers["Program start date"] as string),
        tuition_and_living_cost: Number(answers["How much is your tuition and living cost?"]),
        offer_status:
          (answers["Is your offer conditional or unconditional?"] as
            | "Conditional"
            | "Unconditional") || "Conditional",
        financial_help: (answers["What type of financial help do you need?"] as string[]) || [],
        total_amount_needed:
          (answers["Total amount needed (in either ₦ or foreign currency)"] as string) || "",
        has_guarantor_abroad:
          (answers[
            "Do you have a guarantor or next of kin who is Permanent Resident or citizen of another country besides Nigeria (not collateral)?"
          ] as string) === "Yes",
        authorize_verification:
          (answers[
            "Do you authorize Naijaspora to verify your documents and share them with partner lenders or financial institutions for assessment?"
          ] as string) === "I agree",
        fraud_history:
          (answers[
            "Have you or your sponsor ever been involved in any fraudulent activity, loan default, or financial dispute?"
          ] as string) === "Yes",
        understands_disqualification:
          (answers[
            "Do you understand that falsified documents or incomplete information may lead to disqualification?"
          ] as string) === "I understand",
        agreed_terms:
          (answers[
            "Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"
          ] as string) === "I agree",
      };

      // Optional validation
      if (
        !data.institution_name ||
        !data.country_of_school ||
        !data.program_name ||
        !data.total_amount_needed
      ) {
        console.warn("Missing required loan application fields", data);
        return;
      }

      submitProduct(data);
    }

    if (productType === ProductTyping.SCAM_ALERT) {
      const data: ScamAlertProps = {
        reporting_for: (answers["Are you reporting this scam for:"] as string) === "Yourself" ? "Yourself" : "Someone else",
        current_location: (answers["Where are you currently located?"] as string) || "",
        country_if_abroad: answers["If abroad, which country?"] as string,
        scammer_name: answers["Name of the person/company/agency involved (if known)"] as string,
        scammer_phone: answers["Scammer's phone number(s)"] as string,
        scammer_email: answers["Scammer's email address (if available)"] as string,
        scammer_social: answers["Scammer's social media handle(s) / website (if any)"] as string,
        service_claimed: answers["What service did the scammer claim to offer?"] as string,
        scammer_location: answers["Where is the scammer located (city/state/country)?"] as string,
        connection_source: answers["How did you find or get connected to this person/agent?"] as string[],
        incident_date: answers["When did the incident occur?"] as string,
        incident_description: (answers["Describe what happened"] as string) || "",
        registration_documents: (answers["Did the scammer provide registration documents?"] as string) === "Yes",
        payment_made: (answers["Did you make any payment?"] as string) === "Yes",
        payment_amount: answers["If yes, how much did you pay and in what currency?"] as string,
        payment_method: answers["How did you pay?"] as string[],
        payment_proof: (answers["Do you have proof of payment?"] as string) === "Yes",
        loss_type: answers["Did you lose money or personal documents?"] as string[],
        interaction_result: answers["What was the result of the interaction?"] as string[],
        desired_action: answers["What would you like Naijaspora to do?"] as string[],
        allow_contact_scammer: (answers["Would you like Naijaspora to contact the person/agency directly?"] as string) === "Yes",
        keep_confidential: (answers["Should we keep your identity confidential?"] as string) === "Yes",
        contact_preference: answers["How would you prefer us to contact you?"] as string[],
        confirm_truth: (answers["I confirm that the information I provided is true to the best of my knowledge"] as string) === "I agree",
        agreed_terms: (answers["Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"] as string) === "I agree",
      };

      submitProduct(data);
    }

    if (productType === ProductTyping.POST_VISA_DENIAL) {
      const data: PostVisaDenialProps = {
        denial_country: (answers["What country did you apply to?"] as string) || "",
        banned_from_applying: (answers["Did you get banned from applying?"] as string) === "Yes",
        visa_type: answers["What type of visa were you applying for?"] as string[],
        used_agent: (answers["Did an agent or consultant assist you with your application?"] as string) === "Yes",
        agent_naijaspora_verified: (answers["Is the agent an approved Naijaspora verified agent?"] as string) === "Yes",
        attended_physical_interview: (answers["Did you attend a physical interview?"] as string) === "Yes",
        interview_location: answers["If yes, where? (City/Location)"] as string,
        first_refusal: (answers["Was this your first visa refusal?"] as string) === "Yes",
        previous_denials_count: answers["If no, how many times have you been denied before? (Country & year)"] as string,
        denial_reasons: answers["What reason(s) were given for your denial?"] as string[],
        applied_with_dependents: answers["Did you apply alone or with dependents?"] as string,
        support_needed: answers["What support do you need from Naijaspora?"] as string[],
        consultation_format: answers["Preferred consultation format"] as string[],
        confirm_truth: (answers["I confirm that the information provided is true"] as string) === "I agree",
        agreed_terms: (answers["Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"] as string) === "I agree",
      };

      submitProduct(data);
    }

    if (productType === ProductTyping.CONSULTATION) {
      const data: ConsultationProps = {
        current_location: (answers["Are you currently in Nigeria or abroad?"] as string) || "",
        country_if_abroad: answers["If abroad, which country?"] as string,
        consultation_type: (answers["What type of consultation do you need?"] as string[]) || [],
        target_country: answers["What country are you seeking guidance for?"] as string,
        situation_description: (answers["Briefly describe your situation (why you are booking this consultation)"] as string) || "",
        main_questions: answers["What are your main questions or concerns?"] as string,
        urgency: answers["How urgent is your consultation request?"] as string,
        consultation_style: answers["Preferred consultation style"] as string[],
        contact_method: answers["Preferred communication method"] as string[],
        preferred_datetime: answers["Preferred date/time for consultation"] as string,
        keep_confidential: (answers["Would you like your identity kept confidential during follow-up actions?"] as string) === "Yes",
        referral_source: answers["How did you hear about Naijaspora?"] as string[],
        confirm_accuracy: (answers["I confirm that all information given is accurate"] as string) === "I agree",
        agreed_terms: (answers["Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"] as string) === "I agree",
      };

      submitProduct(data);
    }

    if (productType === ProductTyping.POST_RELOCATION) {
      const data: PostRelocationProps = {
        relocation_country: (answers["Country you relocated to"] as string) || "",
        city_state: answers["City/State of residence"] as string,
        arrival_date: answers["Date of arrival (approx.)"] as string,
        visa_type: answers["What type of visa did you enter with?"] as string[],
        relocated_with_dependents: answers["Did you relocate alone or with dependants?"] as string,
        accommodation_situation: answers["What is your current accommodation situation?"] as string[],
        used_agent: (answers["Did you use an agent or organization for relocation?"] as string) === "Yes",
        agent_naijaspora_verified: (answers["If yes, is the agent an approved/verified Naijaspora agent?"] as string) === "Yes",
        agent_details: answers["If yes, provide agent name/contacts"] as string,
        job_help_needed: answers["Do you need help finding:"] as string[],
        services_needed: answers["What other post-relocation services do you need help with?"] as string[],
        challenges_faced: answers["What challenges are you currently facing?"] as string[],
        consultation_format: answers["Preferred consultation format"] as string[],
        preferred_time: answers["Preferred time for consultation"] as string,
        referral_source: answers["How did you hear about Naijaspora?"] as string[],
        additional_comments: answers["Any additional comments or details we should know?"] as string,
        confirm_accuracy: (answers["I confirm that the information submitted is accurate"] as string) === "I agree",
        agreed_terms: (answers["Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"] as string) === "I agree",
      };

      submitProduct(data);
    }

    if (productType === ProductTyping.DIASPORA_PROJECT) {
      const data: DiasporaProjectProps = {
        country_of_residence: (answers["Country of residence"] as string) || "",
        contact_method: answers["Preferred communication method"] as string[],
        project_type: (answers["What type of project do you want Naijaspora to manage?"] as string[]) || [],
        project_description: (answers["Briefly describe the project"] as string) || "",
        project_location: (answers["What city/state is the project located in?"] as string) || "",
        expected_start_date: answers["What is the expected start date of the project?"] as string,
        project_status: (answers["Is this an ongoing project or new?"] as string) === "New" ? "New" : "Ongoing",
        project_progress: answers["If ongoing, how far along is the project?"] as string,
        tasks_to_handle: answers["What specific tasks do you want us to handle?"] as string[],
        update_frequency: answers["Preferred update frequency"] as string,
        update_format: answers["Preferred update format"] as string[],
        local_representative: (answers["Do you have a representative we will collaborate with locally?"] as string) === "Yes",
        representative_details: answers["If yes, provide name, phone, and relationship"] as string,
        existing_contractors: (answers["Are there current contractors/vendors involved?"] as string) === "Yes",
        contractor_details: answers["If yes, provide details"] as string,
        expected_deliverables: answers["What deliverables do you expect?"] as string[],
        timeline_expectation: answers["Timeline expectations"] as string,
        timeline_date: answers["If fixed, specify date"] as string,
        keep_confidential: (answers["Would you like your identity kept confidential from contractors/vendors?"] as string) === "Yes",
        security_concerns: answers["Are there any security concerns or special instructions?"] as string,
        confirm_accuracy: (answers["I confirm all information provided is accurate"] as string) === "I agree",
        agreed_terms: (answers["Have you read and agreed to Naijaspora's Terms of Service and Privacy Policy?"] as string) === "I agree",
        referral_source: answers["How did you hear about Naijaspora?"] as string[],
        additional_notes: answers["Additional notes or special requests"] as string,
      };

      submitProduct(data);
    }
  };

  const handleAnswer = (question: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));

    // ✅ VisaPrep branching
    if (question === "What type of visa are you applying for?") {
      const val = (value as string).toLowerCase();
      setVisaType(val);

      // Smooth transition to next question
      setTimeout(() => {
        setQuestionStep((prev) => prev + 1);
      }, 200);
    }
  };

  const handleQuestionsStep = (direction: "next" | "prev") => {
    const total = getQuestionSteps(productType || ProductTyping.VISA_PREPS).length;
    setQuestionStep((prev) =>
      direction === "next" ? Math.min(prev + 1, total - 1) : Math.max(prev - 1, 0),
    );
  };

  const getQuestionSteps = useCallback((type: ProductTyping): Question[] => {
    if (type === ProductTyping.VISA_PREPS) {
      const { general, study, other, last_batch } = productsData[ProductTyping.VISA_PREPS];

      if (!visaType) return general;

      if (visaType.toLowerCase() === "study") {
        return [...general, ...study, ...last_batch];
      } else {
        return [...general, ...other, ...last_batch];
      }
    }

    const data = productsData[type]?.general || [];
    return data;
  }, [visaType]);

  const steps = useMemo(
    () => getQuestionSteps(productType || ProductTyping.VISA_PREPS),
    [productType, getQuestionSteps],
  );
  const current = steps[questionStep];

  const safeQuestion = current?.question || "";
  const safeHelp = current?.helpText || "";

  const currentAnswer = answers[safeQuestion];
  const isContinueDisabled =
    !currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0);
  // const isSubmitDisabled = !(
  //   answers["Have you read and agreed to Naijaspora’s Terms of Service and Privacy Policy?"] ===
  //   "I agree"
  // );


  useEffect(() => {
    if (!open || submitSuccess) {
      setQuestionStep(0);
      setAnswers({});
      setVisaType(null);
    }
  }, [open, submitSuccess]);

  return (
    <div
      className={cn(
        "fixed z-[1000] top-0 right-0 h-screen w-screen bg-white shadow-lg transition-transform duration-300 ease-in-out",
        open ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="w-full overflow-auto h-full flex bg-white px-4">
        {/* LEFT SECTION */}
        <div className="flex flex-1 lg:flex-[0_0_55%] items-center justify-center h-full">
          <div className="w-full flex flex-col gap-8 max-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${questionStep}-${visaType}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full flex flex-col gap-8"
              >
                {questionStep !== 0 && (
                  <Button
                    className="!p-0 flex items-center justify-start"
                    icon={<RiArrowLeftLine />}
                    iconPosition="left"
                    variant="text"
                    onClick={() => handleQuestionsStep("prev")}
                  >
                    Go back
                  </Button>
                )}

                {current && (
                  <>
                    <QuestionsHolder
                      title={safeQuestion}
                      subTitle={safeHelp}
                    />

                    <DynamicInput
                      type={current.type}
                      options={current.answer}
                      // multiple={current.multiple}
                      question={safeQuestion}
                      value={answers[safeQuestion]}
                      onChange={handleAnswer}
                    />

                    {questionStep < steps.length - 1 ? (
                      <Button
                        onClick={() => handleQuestionsStep("next")}
                        className={cn(
                          isContinueDisabled ? "!opacity-50 !cursor-not-allowed" : "!opacity-100",
                        )}
                        disabled={
                          !answers[safeQuestion] ||
                          (Array.isArray(answers[safeQuestion]) &&
                            answers[safeQuestion].length === 0)
                        }
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleSubmit()}
                        // className={cn(
                        //   isSubmitDisabled ? "!opacity-50 !cursor-not-allowed" : "!opacity-100",
                        // )}
                        // disabled={isSubmitDisabled}
                      >
                        Submit
                      </Button>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className={cn(
            "lg:flex flex-[0_0_45%] items-center justify-center h-full bg-gradient-to-br from-[rgb(146,193,255)] via-[#8BE8DC] to-[#A7F0C3] hidden",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${questionStep}-right`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full flex gap-8 px-4 flex-col items-center justify-center"
            >
              <div className="backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-6 m-4 w-full max-w-[600px] h-full max-h-[300px]">
                <div className="w-full h-full flex flex-col gap-3 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full bg-black" />
                    <div className="flex flex-col">
                      <p className="font-montserrat text-black font-semibold text-body-large">
                        Bulama
                      </p>
                      <p className="font-inter text-black text-body-medium">
                        Personal Support Worker (Winter 2025)
                      </p>
                    </div>
                  </div>
                  <p className="font-inter text-secondary-base text-body-medium font-medium">
                    “I would definitely recommend Naijaspora because they have an already curated
                    list of in-demand programs in partnership with institutions across Canada.”
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------- SUB COMPONENTS ---------------------------- */

const QuestionsHolder = ({ title, subTitle }: { title: string; subTitle?: string }) => (
  <div className="flex flex-col gap-2.5">
    <h6 className="font-montserrat text-black text-title-large font-semibold">{title}</h6>
    {subTitle && (
      <p className="font-inter text-neutral-50 text-body-large font-medium">{subTitle}</p>
    )}
  </div>
);

const DynamicInput = ({
  type,
  options = [],
  // multiple,
  question,
  value,
  onChange,
}: {
  type: string;
  options?: string[];
  // multiple?: boolean;
  question: string;
  value?: string | string[];
  onChange: (question: string, value: string | string[]) => void;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // ✅ Keep internal state synced with external value (for checkboxes)
  useEffect(() => {
    if (Array.isArray(value)) {
      setSelectedValues(value);
    }
  }, [value]);

  switch (type.toLowerCase()) {
    case "radio":
      return (
        <div className="flex flex-col gap-2">
          {options.map((opt, i) => (
            <label
              key={i}
              className="flex items-center justify-between border border-secondary-base px-3 py-2 rounded-lg cursor-pointer"
            >
              <span>{opt}</span>
              <input
                type="radio"
                name={question}
                value={opt}
                checked={value === opt} // ✅ keep checked if previously selected
                onChange={() => onChange(question, opt)}
              />
            </label>
          ))}
        </div>
      );

    case "checkbox":
      return (
        <div className="flex flex-col gap-2">
          {options.map((opt, i) => (
            <label
              key={i}
              className="flex items-center justify-between border border-secondary-base px-3 py-2 rounded-lg cursor-pointer"
            >
              <span>{opt}</span>
              <input
                type="checkbox"
                checked={selectedValues.includes(opt)} // ✅ restore selection
                onChange={(e) => {
                  const newValues = e.target.checked
                    ? [...selectedValues, opt]
                    : selectedValues.filter((v) => v !== opt);
                  setSelectedValues(newValues);
                  onChange(question, newValues);
                }}
              />
            </label>
          ))}
        </div>
      );

    case "dropdown":
      return (
        <select
          className="w-full border border-secondary-base rounded-lg px-3 py-2"
          value={typeof value === "string" ? value : ""} // ✅ keep selected
          onChange={(e) => onChange(question, e.target.value)}
        >
          <option value="">Select an option</option>
          {options.map((opt, i) => (
            <option
              key={i}
              value={opt}
            >
              {opt}
            </option>
          ))}
        </select>
      );

    case "country":
      return (
        <ReactFlagsSelect
          selected={(typeof value === "string" && value) || "NG"} // ✅ keep previous flag
          onSelect={(val) => onChange(question, val)}
        />
      );

    case "date":
      return (
        <input
          type="date"
          className="w-full border border-secondary-base rounded-lg px-3 py-2"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(question, e.target.value)}
        />
      );

    case "text":
    default:
      return (
        <input
          type="text"
          className="w-full border border-secondary-base rounded-lg px-3 py-2"
          value={typeof value === "string" ? value : ""} // ✅ persist text value
          onChange={(e) => onChange(question, e.target.value)}
        />
      );
  }
};

export default CollectUserInfos;
