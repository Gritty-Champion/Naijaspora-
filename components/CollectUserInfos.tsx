import React, { useState, useMemo } from "react";
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
  const { submitProduct, productType } = useProducts();
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

      console.log("Submitting structured Visa Preps data:", data);
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

  const getQuestionSteps = (type: ProductTyping): Question[] => {
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
  };

  const steps = useMemo(
    () => getQuestionSteps(productType || ProductTyping.VISA_PREPS),
    [productType, visaType],
  );
  const current = steps[questionStep];

  const safeQuestion = current?.question || "";
  const safeHelp = current?.helpText || "";

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
                      multiple={current.multiple}
                      question={safeQuestion}
                      onChange={handleAnswer}
                    />

                    {questionStep < steps.length - 1 ? (
                      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
                    ) : (
                      <Button onClick={() => handleSubmit()}>
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
  multiple,
  question,
  onChange,
}: {
  type: string;
  options?: string[];
  multiple?: boolean;
  question: string;
  onChange: (question: string, value: string | string[]) => void;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  switch (type) {
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
                checked={selectedValues.includes(opt)}
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
          selected="NG"
          onSelect={(val) => onChange(question, val)}
        />
      );

    case "date":
      return (
        <input
          type="date"
          className="w-full border border-secondary-base rounded-lg px-3 py-2"
          onChange={(e) => onChange(question, e.target.value)}
        />
      );

    case "text":
    default:
      return (
        <input
          type="text"
          className="w-full border border-secondary-base rounded-lg px-3 py-2"
          onChange={(e) => onChange(question, e.target.value)}
        />
      );
  }
};

export default CollectUserInfos;
