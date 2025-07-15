"use client";

import { useState } from "react";
import FeaturedCard  from "@/components/blogs/FeaturedCard";
import Image1 from "@/img/blogs/sample1.png";
// import Image2 from "@/img/sample2.webp";
// import Author1 from "@/img/halima.webp";
// import Author2 from "@/img/team.webp";

// Example blog data per category
const blogData = {
  all: [
    {
      image: Image1,
      title: "How to Secure a Student Visa Without Getting Scammed!",
      description:
        "Learn smart tips on identifying legitimate agents, verifying documents, and using NaijaSpora's scam protection toolkit.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "Top 7 Mistakes Migrants Make When Relocating (And How to Avoid Them)",
      description:
        "From poor planning to ignoring embassy timelines — we break down what to fix before your big move.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
  ],
  "migration tips": [
    {
      image: Image1,
      title: "Top 7 Mistakes Migrants Make When Relocating (And How to Avoid Them)",
      description:
        "From poor planning to ignoring embassy timelines — we break down what to fix before your big move.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "The Hidden Costs of Moving Abroad You Should Know",
      description:
        "Discover unexpected relocation expenses and how to budget effectively before taking the leap.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "diaspora finance": [
    {
      image: Image1,
      title: "How to Manage Money While Studying Abroad",
      description:
        "Explore budgeting tips, remittance hacks, and building credit while abroad.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "Avoiding Debt Traps as a New Migrant",
      description:
        "Strategies for staying financially stable in a new country — and avoiding common mistakes.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "visa & travel": [
    {
      image: Image1,
      title: "Essential Documents You Need for Your Visa Interview",
      description:
        "A checklist for all required documents to prevent delays or denials.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "How to Spot Fake Visa Consultants",
      description:
        "Red flags to look out for and verified channels to trust.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "student life": [
    {
      image: Image1,
      title: "Balancing Work and Study Abroad: What You Should Know",
      description:
        "Practical advice on managing jobs, coursework, and social life abroad.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "Building a Support Network as an International Student",
      description:
        "From student unions to local communities — how to find your tribe.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "relocation stories": [
    {
      image: Image1,
      title: "I Moved with My Family to the UK — Here's What Surprised Us",
      description:
        "Real-life experiences of navigating relocation, school, and housing.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "From Lagos to Ontario: My First 90 Days Abroad",
      description:
        "Culture shocks, opportunities, and tips from a first-timer's lens.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "policy watch": [
    {
      image: Image1,
      title: "New Visa Rules in Canada: What Migrants Must Know",
      description:
        "Policy breakdowns and implications for students and workers.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "UK Migration Caps: How It Affects Nigerians",
      description:
        "Understanding quotas and alternatives if you're applying in 2025.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
  "guides & tutorials": [
    {
      image: Image1,
      title: "Step-by-Step Guide to Applying for a Schengen Visa",
      description:
        "Every form, every requirement, simplified and demystified.",
      authorName: "NaijaSpora Team",
      authorAvatar: Image1,
    },
    {
      image: Image1,
      title: "How to Write the Perfect SOP for Graduate School",
      description:
        "Use our template and checklist to craft a strong Statement of Purpose.",
      authorName: "Halima Okoye",
      authorAvatar: Image1,
    },
  ],
};


const tabs = ["all", "migration tips", "diaspora finance", "visa & travel", "student life", "relocation stories", "policy watch", "guides & tutorials"];


const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const currentData = blogData[activeTab.toLowerCase() as keyof typeof blogData];

  return (
    <section className="w-full font-montserrat mb-[50px]">
      {/* Tabs */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar md:flex-wrap text-sm md:text-title-medium font-medium py-8 bg-white px-4 md:px-0 md:pl-[20px] xl:pl-[100px]">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-2 border-b-2 transition-all whitespace-nowrap
 ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

<div className="bg-surface-container py-8 px-4 md:px-0 md:pl-[20px] xl:pl-[100px]">
      {/* Section Title */}
      <h3 className="text-primary-base font-medium text-headline-medium mb-6 uppercase">
        Featured {activeTab}
      </h3>

      {/* Featured Card */}
      {currentData?.map((blog, idx) => (
  <FeaturedCard key={idx} {...blog} />
))}
      
      </div>
    </section>
  );
};

export default FeaturedTabs;