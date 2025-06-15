import { RiArrowDropDownFill } from "@remixicon/react";
import { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQData {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center self-stretch p-5"
      >
        <h3 className="text-black text-center font-montserrat text-title-medium font-medium">
          {question}
        </h3>
        <span
          className={`transform transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <RiArrowDropDownFill />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="px-5 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className=" text-black text-left font-inter text-title-small font-regular">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQListProps {
  faqData: FAQData[];
}

const FAQList: React.FC<FAQListProps> = ({ faqData }) => {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
