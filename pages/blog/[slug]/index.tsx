import Image from "next/image";
import { RiTwitterXFill } from "@remixicon/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyCTA from "@/components/blogs/blogpage/JourneyCTA";
import RelatedPosts from "@/components/blogs/blogpage/RelatedPosts";
import ScrollToTopButton from "@/components/blogs/blogpage/ScrollToTopButton";

import HeroImage from "@/img/blogs/sample1.png";
import AuthorAvatar from "@/img/blogs/sample1.png";

const BlogPostPage = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white font-montserrat">
      <Header isHeroInView={false} />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <article>
          {/* --- Meta Info & Title --- */}
          <div className="max-w-4xl mx-auto mb-8  text-center">
            <p className="text-title-medium text-black font-medium uppercase">
              NEWS <span className="text-neutral-50"> <span className="mx-2 text-display-medium">.</span>  JUNE 25, 2025 </span>
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-display-large font-bold text-black my-4 leading-tight">
              Top Countries Offering Easy Visas for Nigerians in 2025
            </h1>
          </div>

          {/* --- Hero Image with Text Overlay --- */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src={HeroImage}
              alt="Easy Visa Policy"
              fill
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <p className="font-light text-lg md:text-2xl">20 Best Countries in the World with</p>
                <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider">
                  Easy Visa Policy
                </h2>
              </div>
            </div> */}
          </div>

          {/* --- Main Content Layout (Sidebar + Article Body) --- */}
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-16">

            {/* --- Left Sidebar (Author & Share) --- */}
            <aside className="lg:w-1/4 w-full mb-8 lg:mb-0">
              <div className="lg:sticky lg:top-24">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={AuthorAvatar}
                    alt="Emeka Johnson"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-black text-headline-small">Emeka Johnson</p>
                  </div>
                </div>

                {/* Share Post */}
                <div>
                  <h3 className="font-medium text-headline-medium font-mediun mb-3 text-neutral-35">SHARE THIS POST</h3>
                  <a
                    href="#"
                    className="flex w-32 items-center justify-center gap-2 rounded-full bg-black py-2 font-medium text-white text-headline-small transition-opacity hover:opacity-90"
                  >
                    <RiTwitterXFill className="h-6 w-6" />
                    <span>Post</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* --- Article Body --- */}
            <div className="lg:w-3/4 w-full max-w-none">
              <div className="prose prose-lg">
                <p>
                  At NaijaSpora, we know how tough visa applications can be—long queues, high
                  rejection rates, and complex paperwork. That&rsquo;s why we&rsquo;ve put together an
                  exciting list of countries making it easier for Nigerians to get visas in 2025.
                </p>
                <p>
                  Whether you&rsquo;re planning to study, work, or explore the abroad, these destinations
                  have simplified their policies, offering a ray of hope for Nigerian passport holders.
                  Also read: <a href="#">How to break a year-complained flight ordeal and its many lessons</a>.
                </p>
                <p>
                  We&rsquo;ve studied global visa trends and spoken to travelers who&rsquo;ve successfully made
                  the move. The verdict? A select list of welcoming countries where Nigerians are
                  experiencing less friction and more success.
                </p>

                <h3>What this means for you</h3>
                <ul>
                  <li><strong>Faster processing</strong>: Many of these countries offer e-visas or visa-on-arrival, cutting wait times.</li>
                  <li><strong>Less documentation abuse</strong>: No overwhelming paperwork—just clear, simple steps.</li>
                  <li><strong>Lower rejection risk</strong>: These countries have high visa approval rates for Nigerians.</li>
                  <li><strong>More immigration options</strong>: Whether it&rsquo;s for work, study, or a fresh start—these countries are open to welcoming you.</li>
                </ul>

                <h3>Get started today</h3>
                <p>
                  Choosing the right country is half the visa battle won. If you&rsquo;re ready to explore
                  new opportunities abroad and avoid drowning in bureaucracy, start with these easier
                  options. You might be just one click away from your next big move.
                </p>
              </div>
              <JourneyCTA />
              <hr className="border-none h-[2px] bg-neutral-50" />
              <RelatedPosts />
            </div>
          </div>
        </article>


      </main>



      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default BlogPostPage;