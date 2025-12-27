import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/blogs/NewsletterForm";
import Hero from "@/components/discover/shared/Hero";
import Features from "@/components/discover/shared/Features";
import Solutions from "@/components/discover/shared/Solutions";
import Impact from "@/components/discover/shared/Impact";

import { discoverPagesData } from "@/data/discover-pages-data";

const ForAgentsPage = () => {
  const pageData = discoverPagesData.agents;

  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />
      <main className="mb-20">
        <Hero {...pageData.hero} />
        <Features {...pageData.features} />
        <Solutions {...pageData.solutions} />
        <Impact {...pageData.impact} />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
};

export default ForAgentsPage;