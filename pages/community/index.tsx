import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/blogs/NewsletterForm";
import Button from "@/components/Button";
import Image from "next/image";
import HeroImg from "@/img/community/hero.png";
import DiscordImg from "@/img/community/discord.png";
import FacebookImg from "@/img/community/facebook.png";
import TelegramImg from "@/img/community/telegram.png";

const CommunityPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />
      <main className="mb-20">
        {/* Hero Section */}
        <section className="w-full bg-[#E5E5FF] px-[10px] md:px-[20px] xl:px-[100px] py-[100px] lg:py-[150px]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 max-w-[700px]">
                <h1 className="text-display-medium font-bold text-black mb-8">
                  Join the <span className="text-primary-base">NaijaSpora 
                  Community</span>
                </h1>
                <p className="text-headline-small text-black">
                  Connect with fellow Nigerians planning to relocate, study, or
                  travel abroad. Join our communities to share experiences, get
                  guidance, and stay informed.
                </p>
              </div>
              <div className="flex-1 relative w-full max-w-[500px] aspect-square">
                <Image
                  src={HeroImg}
                  alt="Community illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
        </section>

        {/* Discord Community Section */}
        <section className="w-full px-[10px] md:px-[20px] xl:px-[100px] text-center py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-48">
              <div className="flex-1 max-w-[500px] text-center">
                <h2 className="text-display-small lg:text-display-medium font-bold text-black mb-6">
                  Discord Community
                </h2>
                <p className="text-headline-small  text-black mb-8">
                  Connect in real-time with Nigerians around the world on our
                  NaijaSpora Discord server. Join topic-specific channels on
                  relocation, study abroad, visas, and travel tips. Share your
                  journey, get quick answers, and network with like-minded
                  individuals in a friendly, moderated environment.
                </p>
                <Button variant="primary" size="lg" onClick={() => window.open("#", "_blank")}>Join</Button>
              </div>
              <div className="flex-1 relative w-full max-w-[400px] aspect-square">
                <Image
                  src={DiscordImg}
                  alt="Discord logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
        </section>

        {/* Facebook Community Section */}
        <section className="w-full px-[10px] md:px-[20px] xl:px-[100px] text-center py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-48">
              <div className="flex-1 max-w-[500px] text-center ">
                <h2 className="text-display-small lg:text-display-medium font-bold text-black mb-6">
                  Facebook Community
                </h2>
                <p className="text-headline-small text-black mb-8">
                  Our NaijaSpora Facebook group is a thriving hub for shared
                  experiences, migration stories, and helpful discussions.
                  Engage with verified agents, experts, and travelers who&apos;ve
                  walked the path before you. Stay updated with the latest
                  education insights, visa news, and community events.
                </p>
                <Button size="lg" onClick={() => window.open("#", "_blank")}>Join</Button>
              </div>
              <div className="flex-1 relative w-full max-w-[400px] aspect-square">
                <Image
                  src={FacebookImg}
                  alt="Facebook community illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
        </section>

        {/* Telegram Community Section */}
        <section className="w-full px-[10px] md:px-[20px] xl:px-[100px] text-center py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-x-48">
              <div className="flex-1 max-w-[500px] text-center ">
                <h2 className="text-display-small lg:text-display-medium font-bold text-black mb-6">
                  Telegram Community
                </h2>
                <p className="text-headline-small text-black mb-8">
                  Join the NaijaSpora Telegram group for quick updates, travel
                  alerts, and one-on-one interactions with our community
                  managers. It&apos;s the perfect space for fast communication,
                  Q&A sessions, and connecting with people who share your
                  relocation goals.
                </p>
                <Button size="lg" onClick={() => window.open("#", "_blank")}>Join</Button>
              </div>
              <div className="flex-1 relative w-full max-w-[400px] aspect-square">
                <Image
                  src={TelegramImg}
                  alt="Telegram community illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
        </section>

        {/* Newsletter Form */}
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
