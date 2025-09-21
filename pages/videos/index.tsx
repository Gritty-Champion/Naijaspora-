import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoSection from "@/components/videos/VideoSection";

const FeatureVideosPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />

      <main className="pt-24 sm:pt-28">
        <div className="px-28 bg-primary-on_primary_fixed text-white">
             <h1 className="text-display-small sm:text-display-medium font-semibold">
                 Feature Videos
            </h1>
        </div>
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default FeatureVideosPage;