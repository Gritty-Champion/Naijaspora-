"use client";
import React, { useState } from "react";
import MigrationTipCard from "@/components/blogs/MigrationTipCard";
import Image1 from "@/img/blogs/sample1.png";
import { StaticImageData } from "next/image";
import Button from "@/components/Button";

interface MigrationTip {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: StaticImageData;
}

const migrationTips: MigrationTip[] = [
  {
    id: "1",
    title: "Timeline & Tasks from Admission to Arrival",
    description:
      "Visa prep is just the beginning — here's how to manage the entire process.",
    author: "Chima Kalu",
    date: "June 16, 2025",
    image: Image1,
  },
  {
    id: "2",
    title: "Do You Really Need a Travel Health Insurance? Here's When You Do",
    description:
      "Understand which countries require it and how to get affordable coverage.",
    author: "Fatima Abdullah",
    date: "June 14, 2025",
    image: Image1,
  },
  {
    id: "3",
    title: "How to Choose the Right City for Your New Life Abroad",
    description:
      "Tuition is just one factor — think affordability, jobs, and communities too.",
    author: "Dayo Ogunleye",
    date: "June 10, 2025",
    image: Image1,
  },
  {
    id: "4",
    title: "Plan Your Budget Like a Pro",
    description:
      "Master the art of budgeting and avoid financial surprises abroad.",
    author: "Fatima N.",
    date: "June 9, 2025",
    image: Image1,
  },
  {
    id: "5",
    title: "The Culture Shock Survival Kit",
    description: "Real-life tips to help you thrive in a new country.",
    author: "James A.",
    date: "June 5, 2025",
    image: Image1,
  },
  {
    id: "6",
    title: "Part-Time Work Rules Explained",
    description:
      "What international students need to know about working abroad.",
    author: "Linda G.",
    date: "June 2, 2025",
    image: Image1,
  },
  {
    id: "7",
    title: "Avoid These Common Visa Mistakes",
    description:
      "These mistakes can delay or ruin your visa application — avoid them.",
    author: "Ugochi N.",
    date: "May 30, 2025",
    image: Image1,
  },
  {
    id: "8",
    title: "Proof of Funds: What Counts and What Doesn't",
    description:
      "From savings accounts to scholarships, what's acceptable in top countries.",
    author: "Tunde Aluko",
    date: "May 28, 2025",
    image: Image1,
  },
  {
    id: "9",
    title: "How to Book Student Accommodation from Nigeria",
    description: "A step-by-step guide to secure housing before you land.",
    author: "Ngozi Peters",
    date: "May 25, 2025",
    image: Image1,
  },
  {
    id: "10",
    title: "US Student Visa: Updated Interview Tips",
    description: "2025 updates and how to answer tricky questions.",
    author: "Chinyere O.",
    date: "May 21, 2025",
    image: Image1,
  },
  {
    id: "11",
    title: "What You Need to Know About Dependent Visas",
    description:
      "Bringing your spouse or kids? Learn what's allowed and what's not.",
    author: "David I.",
    date: "May 19, 2025",
    image: Image1,
  },
  {
    id: "12",
    title: "Top Countries Offering Work After Study",
    description: "Get the list of nations that allow post-study work permits.",
    author: "Amina Yusuf",
    date: "May 17, 2025",
    image: Image1,
  },
  {
    id: "13",
    title: "Your First 30 Days Abroad: What to Prioritize",
    description: "Bank account, sim card, health insurance and more.",
    author: "Chima Kalu",
    date: "May 14, 2025",
    image: Image1,
  },
  {
    id: "14",
    title: "Documents You Should Carry in Your Hand Luggage",
    description: "Some papers must never go in checked baggage.",
    author: "Fatima Abdullah",
    date: "May 10, 2025",
    image: Image1,
  },
  {
    id: "15",
    title: "Student Visa Rejection: How to Bounce Back",
    description: "Learn how to reapply the right way and fix mistakes.",
    author: "Ugochi N.",
    date: "May 8, 2025",
    image: Image1,
  },
  {
    id: "16",
    title: "Canada vs UK: Which is Easier for International Students?",
    description: "Breaking down tuition, work hours, PR options and more.",
    author: "Tunde Aluko",
    date: "May 4, 2025",
    image: Image1,
  },
  {
    id: "17",
    title: "Navigating Airport Immigration Without Panic",
    description: "Tips to stay calm and confident when answering questions.",
    author: "Amina Yusuf",
    date: "May 2, 2025",
    image: Image1,
  },
  {
    id: "18",
    title: "Can You Switch Visas After Arrival? Here's What to Know",
    description:
      "Understand when and how you can change your visa status abroad.",
    author: "Dayo Ogunleye",
    date: "May 1, 2025",
    image: Image1,
  },
];

const MigrationTipsSection: React.FC = () => {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(migrationTips.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };


  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTips = migrationTips.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-headline-medium font-medium text-primary-base mb-8">
        Latest Insights in Migration Tips
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentTips.map((tip) => (
          <MigrationTipCard key={tip.id} tip={tip} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={handlePrevious}
          size="lg"
          variant={currentPage === 1 ? "secondary" : "primary"}
          disabled={currentPage === 1}
          className="text-white"
        >
          ← Previous
        </Button>
        <div className="rounded-full border border-gray-300 px-4 py-1 text-sm">
          {currentPage}/{totalPages}
        </div>
        <Button
          onClick={handleNext}
          size="lg"
          variant={currentPage === totalPages ? "secondary" : "primary"}
          disabled={currentPage === totalPages}
          className="text-white"
        >
          Next →
        </Button>
      </div>
    </section>
  );
};

export default MigrationTipsSection;
