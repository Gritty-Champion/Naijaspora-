import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import cta_image from '@/img/about/cta-image.png'

const CtaSection = () => {
  return (
    <section className="bg-white py-10 lg:py-16  font-montserrat">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          <div className='lg:col-span-3 '>
            <h2 className="text-display-medium font-semibold text-primary-base">
              Making Change Together
            </h2>
            <div className="prose prose-lg max-w-none text-black font-regular text-headline-small mt-6">
              <p>
                At NaijaSpora, we believe relocation should change lives — not ruin them.
              </p>
              <p>
                That&apos;s why we reinvest in education, digital literacy, and migration safety programs across Nigeria. By choosing NaijaSpora, you&apos;re not just starting a journey — you&apos;re joining a movement for better migration.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="mt-8"
            >
              Get Started
            </Button>
          </div>

          <div className="flex justify-center items-center lg:col-span-2">
             <Image
                src={cta_image}
                alt="Illustration of two people traveling"
                width={550}
                height={450}
              />
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default CtaSection;