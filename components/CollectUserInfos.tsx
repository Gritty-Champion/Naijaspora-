import React, { SetStateAction, useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Button from './Button';
import { cn } from '@/libs/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { RiArrowLeftLine, RiInfoI } from '@remixicon/react';


const CollectUserInfos = ({
  open,
}: {
    open: boolean;
}) => {
  const [questionStep, setQuestionStep] = useState<number>(0);
  // const [gradientIndex, setGradientIndex] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const gradients = [
  //   'from-[#D4A5FF] via-[#FF9EC8] to-[#FFC291]',
  //   'from-[#92C1FF] via-[#8BE8DC] to-[#A7F0C3]',
  //   'from-[#B0B2FF] via-[#D4A5FF] to-[#FF9EC8]',
  //   'from-[#FF9BAA] via-[#FFB584] to-[#FFE38A]'
  // ];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIsTransitioning(true);
  //     setTimeout(() => {
  //       setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
  //       setIsTransitioning(false);
  //     }, 500); // Half of transition duration
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, [gradients.length]);

  const handleQuestionsStep = (direction: "next" | "prev") => {
    setQuestionStep((prev) => (direction === "next" ? prev + 1 : Math.max(prev - 1, 0)));
  };

  const QuestionSteps = [
    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder
          title={"What is your nationality?"}
          subTitle={"Select the nationality based on your passport."}
        />
        <InputInstance type="country" />
      </div>

      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
    </>,
    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder title={"Do you have a valid passport from your country?"} />
        <InputInstance
          type="radio"
          radioLabel={"yes"}
        />
        <InputInstance
          type="radio"
          radioLabel={"no"}
        />
      </div>

      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
    </>,
    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder
          title={"What would you like Naijaspora to help you with?"}
          subTitle={"Most students choose both, but you can pick what fits your situation."}
        />
        <InputInstance
          type="checkbox"
          checkboxLabel={"Get Admission"}
          checkboxSubLabel={"Help you apply and get accepted to a Canadian school"}
        />
        <InputInstance
          type="checkbox"
          checkboxLabel={"Get a loan"}
          checkboxSubLabel={"Passage provides affordable student loan to pay your tuition fees"}
        />
      </div>
      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
    </>,
    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder title={"Where are you physically located right now?"} />
        <InputInstance
          type="radio"
          radioLabel={"Outside Canada"}
        />
        <InputInstance
          type="radio"
          radioLabel={"In Canada"}
        />
      </div>
      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
    </>,

    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder title={"What is your immigration status in Canada?"} />
        <InputInstance
          type="radio"
          radioLabel={"Temporary resident"}
        />
        <InputInstance
          type="radio"
          radioLabel={"Permanent resident"}
        />
        <InputInstance
          type="radio"
          radioLabel={"Citizen"}
        />
        <InputInstance
          type="radio"
          radioLabel={"I don't have a valid status"}
        />
      </div>
      <Button onClick={() => handleQuestionsStep("next")}>Continue</Button>
    </>,

    <>
      <div className="w-full flex gap-4 flex-col max-w-[400px] border-3">
        <QuestionsHolder
          title={"How old are you?"}
          subTitle={"Please provide your age in years."}
        />
        <InputInstance
          type="input"
          radioLabel={"Temporary resident"}
        />
      </div>
      <Button onClick={() => {}}>Continue</Button>
    </>,
  ];

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-screen w-screen bg-white shadow-lg transition-transform duration-300 ease-in-out",
        open ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="w-full h-full flex bg-white px-4">
        <div className="flex flex-1 lg:flex-[0_0_55%] items-center justify-center h-full">
          <div className="w-full flex gap-8 flex-col max-w-[400px] border-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={questionStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full flex gap-8 flex-col max-w-[400px] border-3"
              >
                {questionStep !== 0 && (
                  <div className="w-full flex flex-col gap-4 items-start justify-center">
                    <Button
                      className="!p-0 flex items-center justify-center"
                      icon={<RiArrowLeftLine />}
                      iconPosition="left"
                      variant="text"
                      onClick={() => handleQuestionsStep("prev")}
                    >
                      Go back
                    </Button>
                    <div className="p-1 border border-secondary-base rounded-md">
                      <RiInfoI className="secondary-base" />
                    </div>
                  </div>
                )}
                {QuestionSteps[questionStep]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div
          className={`
          lg:flex flex-[0_0_45%] items-center justify-center
          h-full
          bg-gradient-to-br
          transition-all duration-1000 ease-in-out
          from-[rgb(146,193,255)] via-[#8BE8DC] to-[#A7F0C3]
          hidden
        `}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={questionStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full flex gap-8 px-4 flex-col items-center justify-center border-3"
            >
              <div className="backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-6 m-4 w-full max-w-[600px] h-full max-h-[300px]">
                <div className="w-full h-full flex flex-col gap-3 justify-between">
                  <div className="w-full h-full flex gap-1.5">
                    <div className="w-[50px] h-[50px] gap-2 flex items-center rounded-full bg-black" />
                    <div className="flex flex-col gap-1">
                      <p className={"font-montserrat text-black text-body-large font-semibold"}>
                        Bulama
                      </p>
                      <p className={"font-inter text-black text-body-medium font-medium"}>
                        Personal Support Worker (Winter 2025)
                      </p>
                    </div>
                  </div>
                  <p className={"font-inter text-secondary-base text-body-medium font-medium"}>
                    I would definitely recommend Naijaspora because they have an already curated
                    list of in-demand programs in partnership with institutions across Canada. Your
                    chances of getting a high-paying job are more assured with Naijaspora.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const QuestionsHolder = ({
  title,
  subTitle
}: {
    title: string;
    subTitle?: string;
}) => {
  return (
    <div className={"flex flex-col gap-2.5"}>
      <h6 className={"font-montserrat text-black text-title-large font-semibold"}>{title}</h6>
      {subTitle && (
        <p className="font-inter text-neutral-50 text-body-large font-medium">
          { subTitle }
        </p>
      )}
    </div>
  );
}

const InputInstance = ({
  type = 'country',
  select = "NG",
  onSelect = () => { },
  radioLabel = 'yes',
  checkboxLabel = "Get Admission",
  checkboxSubLabel = "Help you apply and get accepted to a Canadian school"
}: {
  type: "country" | "radio" | "input" | "checkbox";
  select?: string;
    onSelect?: React.Dispatch<SetStateAction<string>>;
    radioLabel?: string;
    checkboxLabel?: string;
    checkboxSubLabel?: string;
}) => {
  return (
    <div>
      {(() => {
        switch (type) {
          case "country":
            return (
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                // showSelectedLabel={showSelectedLabel}
                // selectedSize={selectedSize}
                // showOptionLabel={showOptionLabel}
                // optionsSize={optionsSize}
                // placeholder={placeholder}
                // searchable={searchable}
                // searchPlaceholder={searchPlaceholder}
                // alignOptionsToRight={alignOptionsToRight}
                fullWidth={true}
                // disabled={disabled}
              />
            );

          case "radio":
            return (
              <div className="w-full border-[0.5px] rounded-lg border-secondary-base px-2.5 py-2 flex justify-between items-center">
                <p className="font-inter capitalize text-neutral-50 text-body-large font-medium">
                  {radioLabel}
                </p>
                <label
                  htmlFor="radio"
                  className={cn(
                    "w-[25px] h-[25px] rounded-full border border-secondary-base flex items-center justify-center cursor-pointer",
                  )}
                >
                  <input
                    type="radio"
                    id="radio"
                    name="radio"
                    className="peer hidden"
                  />
                  <span className="w-[16px] h-[16px] rounded-full bg-secondary-base scale-0 peer-checked:scale-100 transition-transform" />
                </label>
              </div>
            );

          case 'checkbox':
            return (
              <div className="flex flex-col border-[0.5px] gap-2 border-secondary-base rounded-md px-2.5 py-2 ">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="checkbox"
                    className="w-5 h-5 flex items-center justify-center border border-neutral-40 rounded-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="peer hidden"
                    />
                    <span className="w-3 h-3 bg-secondary-base rounded-sm scale-0 peer-checked:scale-100 transition-transform"></span>
                  </label>
                  <p className="font-inter capitalize text-neutral-10 text-label-large font-medium">
                    {checkboxLabel}
                  </p>
                </div>
                <p className="font-inter capitalize text-neutral-50 text-label-small font-medium">
                  {checkboxSubLabel}
                </p>
              </div>
            );

          case "input":
            return (
              <div className="flex flex-col border-[0.5px] gap-2 border-secondary-base rounded-md px-2.5 py-2">
                <input
                  type="text"
                  className="w-full h-full flex flex-1 outline-none focus:outline-none"
                  // value={select}
                  // onChange={(e) => onSelect(e.target.value)}
                />
              </div>
            );

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CollectUserInfos
