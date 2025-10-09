import Image from 'next/image';
import WavyLine from '@/components/about/WavyLine';
import picture1 from '@/img/about/picture1.png';
import picture2 from '@/img/about/picture2.png';
import picture3 from '@/img/about/picture3.png';    
import picture4 from '@/img/about/picture4.png';
import picture5 from '@/img/about/picture5.png';
import picture6 from '@/img/about/picture6.png';

const galleryImages = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
];

const AboutHero = () => {
  return (
    <section className="relative bg-teal-500 text-white font-montserrat overflow-hidden bg-[#0696a3]">
      <WavyLine className="absolute bottom-[21rem] right-0 w-[80%] h-[80%] text-white opacity-50 z-10 " />


        <div className="relative z-20 min-h-[90vh] pt-32">
          <div className="sm:grid grid-cols-2 px-[100px]">
            <div className="flex items-center justify-center text-center  ">
              <div>
                <p className="text-headline-medium font-medium text-primary-on_primary_fixed">ABOUT US</p>
                <h1 className="text-display-medium font-semibold mt-6">
                  Empowering <span className='text-primary-on_primary_fixed'>global relocation</span>  for dreamers across Africa and the diaspora.
                </h1>
              </div>
            </div>
          </div>
          
          <div className="mt-16 w-full">
            <div className="grid grid-cols-3 md:grid-cols-6 ">
              {galleryImages.map((src, index) => (
                <div key={index} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutHero;