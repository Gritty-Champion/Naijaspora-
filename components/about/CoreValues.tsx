import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import coreValuesImage from '@/img/about/core_values.png';

const coreValuesData = [
  {
    number: '001',
    description: 'We build with integrity — no lies, no shortcuts.',
  },
  {
    number: '002',
    description: 'We champion accessibility — every Nigerian deserves a fair shot.',
  },
  {
    number: '003',
    description: 'We protect dreams — by calling out scams and guiding people right.',
  },
  {
    number: '004',
    description: 'We own our impact — and we work to make it count daily.',
  },
  {
    number: '005',
    description: 'We lead with empathy — because relocation is deeply personal.',
  },
];

const CoreValues = () => {
  return (
    <section className="bg-primary-95 py-10 lg:py-16 font-montserrat bg-white">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center sm:text-left">

          <div>
            <h2 className="text-display-medium font-semibold text-primary-on_primary_fixed mb-12">
              OUR CORE VALUES
            </h2>
            
            <div className="space-y-8">
              {coreValuesData.map((value) => (
                <div key={value.number}>
                  <p className="text-display-medium font-semibold text-primary-on_primary_container">
                    {value.number}
                  </p>
                  <p className="text-headline-small text-black mt-1 max-w-md font-regular">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
             <Image
                src={coreValuesImage}
                alt="Naijaspora&apos;s core values"
                width={450}
                height={550}
                className="rounded-3xl"
              />
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default CoreValues;