import React from "react";
import VideoCard from "@/components/videos/Videocard";
import { motion } from "framer-motion";
import { cn } from "@/libs/cn";

const videoData = [
  {
    category: "Visa Preparation Made Simple",
    videos: [
      {
        thumbnailText: "Watch how to answer common visa interview questions.",
        title: "Mock Visa Interview Walkthrough",
      },
      {
        thumbnailText: "Step-by-step guide on applying for loans without collateral.",
        title: "Zero Collateral Loan Application Guide",
      },
      {
        thumbnailText: "Stay safe by verifying your agent's authenticity.",
        title: "How to Verify Your Travel Agent on Naijaspora",
      },
    ],
  },
  {
    category: "Financial Support & Loans",
    videos: [
      {
        thumbnailText: "Secure funding for your education through verified loans.",
        title: "How to Apply for Education Loans Without Collateral",
      },
      {
        thumbnailText: "Follow simple steps to submit your loan requirements.",
        title: "Step-by-Step Submitting Loan Applications",
      },
      {
        thumbnailText: "Discover how Naijaspora supports your education abroad.",
        title: "Funding Your Studies Abroad with Naijaspora",
      },
    ],
  },
  {
    category: "Scam & Safety",
    videos: [
      {
        thumbnailText: "Tips to spot and report travel scams.",
        title: "How to Spot and Report Travel Scammers",
      },
      {
        thumbnailText: "Stay updated on recent scam alerts.",
        title: "Using Naijaspora Scam Alert Database",
      },
    ],
  },
  {
    category: "Diaspora Projects",
    videos: [
      {
        thumbnailText: "Keep track of your projects back home while you're away.",
        title: "Managing Projects From Abroad With Naijaspora",
      },
      {
        thumbnailText: "Monitor your property development efforts.",
        title: "Real Estate and Business Management Made Easy",
      },
    ],
  },
  {
    category: "AI & Post-Visa Support",
    videos: [
      {
        thumbnailText: "Get instant AI-powered help for visa denial assistance.",
        title: "AI-Powered Visa Denial Assistance",
      },
      {
        thumbnailText: "Learn the right next steps after a visa rejection.",
        title: "Next Steps After Visa Rejection",
      },
    ],
  },
  {
    category: "Relocation & Settlement",
    videos: [
      {
        thumbnailText: "Quick tools for finding affordable housing abroad.",
        title: "Finding Housing Abroad with Naijaspora",
      },
      {
        thumbnailText: "Uncover paid employment offers.",
        title: "Employment Verification & Job Search Support",
      },
      {
        thumbnailText: "Stay connected with support after moving abroad.",
        title: "Post-Relocation Community Support",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const VideoSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-20">
      {videoData.map((section, index) => (
        <section key={index}>
          <h2 className="text-headline-medium sm:text-display-medium font-semibold text-center mb-12">
            {section.category}
          </h2>
            <div className="flex justify-center">
            <motion.div
              className={cn(
                "grid grid-cols-1 gap-8",
                section.videos.length >= 2 && "md:grid-cols-2",
                section.videos.length >= 3 && "lg:grid-cols-3"
              )}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.videos.map((video, videoIndex) => (
                <VideoCard
                  key={videoIndex}
                  thumbnailText={video.thumbnailText}
                  title={video.title}
                />
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default VideoSection;