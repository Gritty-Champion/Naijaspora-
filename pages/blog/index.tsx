import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/blogs/BlogHero";
import HeroImg from "@/img/blogs/hero.webp";
import FeaturedTabs from "@/components/blogs/FeaturedTabs";
import MigrationTipsSection from "@/components/blogs/MigratedTipSection";
import NewsletterForm from "@/components/blogs/NewsletterForm";


const index = () => {
  return (
    <div
      className={
        "flex w-full flex-col items-center gap-[50px] bg-white overflow-hidden font-montserrat"
      }
    >
      <Header isHeroInView={false} />
      <main className="flex w-full flex-col items-center gap-">
        <Hero
          heroBackgroundClassName="bg-[#d3eaf2]"
          heroImage={HeroImg}
        />
        <FeaturedTabs />
        <MigrationTipsSection />
        <NewsletterForm />

        
      </main>
      <Footer />
    </div>
  );
};

export default index;
