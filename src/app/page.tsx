import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col justify-start items-center gap-20 bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
