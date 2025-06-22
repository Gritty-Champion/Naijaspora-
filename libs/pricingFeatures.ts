import agents_1 from "@/img/agents/pricing_1.svg";
import agents_2 from "@/img/agents/pricing_2.svg";
import agents_3 from "@/img/agents/pricing_3.svg";

export enum AgentTier {
  Basic = "basic",
  Standard = "standard",
  Premium = "premium",
}

export enum Category {
  Agent = "agent",
  Verify = "verify",
  Report = "report"
}

export interface PricingFeatureItem {
  type: AgentTier;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  price: string;
  features: {
    title?: string;
    data: string[];
  };
}

export type PricingFeaturesType = {
  [key in Category]: PricingFeatureItem[];
};

const PricingFeatures: PricingFeaturesType = {
  [Category.Agent]: [
    {
      type: AgentTier.Basic,
      image: agents_1,
      price: "10",
      features: {
        title: "Quick trust check for one agent.",
        data: ["1 Agent Lookup", "Response Time: 48 hrs"],
      },
    },
    {
      type: AgentTier.Standard,
      image: agents_2,
      price: "25",
      features: {
        title: "Detailed check with insights.",
        data: ["1 Agent Full Profile Check", "Track Record & Social Audit"],
      },
    },
    {
      type: AgentTier.Premium,
      image: agents_3,
      price: "40",
      features: {
        title: "For high-stakes visa journeys.",
        data: [
          "Up to 3 Agents Verified",
          "Live Call Confirmation",
          "Verified Badge Recommendation",
        ],
      },
    },
  ],

  [Category.Verify]: [
    {
      type: AgentTier.Basic,
      image: agents_1,
      price: "10",
      features: {
        title: "Quick checks for key documents.",
        data: ["Up to 3 documents reviewed"],
      },
    },
    {
      type: AgentTier.Premium,
      image: agents_3,
      price: "40",
      features: {
        title: "Comprehensive validation for complex applications.",
        data: ["Up to 10 documents reviewed"],
      },
    },
  ],

  [Category.Report]: [
    {
      type: AgentTier.Basic,
      image: agents_1,
      price: "10",
      features: {
        title: "Quick trust check for one agent.",
        data: ["Submit scammer details"],
      },
    },
  ],
};

export default PricingFeatures;
