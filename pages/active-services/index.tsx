import Header from "@/components/Header"; // Assuming your standard header
import Footer from "@/components/Footer"; // Assuming your standard footer
import Hero from "@/components/active-services/Hero";
import ServiceGrid from "@/components/active-services/ServiceGrid";

const ServicesPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />
      <main className="mt-10 sm:mt-20">
        <Hero />
        <ServiceGrid />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
