import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';

const VisionStatement = () => {
  return (
    <section className="bg-white py-10 lg:py-16 "> 
      <Wrapper>
        <div className="flex flex-col items-center text-center">
          <Image 
            src="/logo.svg"
            alt="NaijaSpora Logo"
            width={180}
            height={48}
            className="mb-8"
          />

          
          <h2 className="text-headline-small sm:text-display-medium font-semibold text-surface-on max-w-4xl">
            We are <span className="font-bold text-primary-base">NaijaSpora</span>, and our vision is to make safe, honest relocation the new normal.
          </h2>

        </div>
      </Wrapper>
    </section>
  );
};

export default VisionStatement;