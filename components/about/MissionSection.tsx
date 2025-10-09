import React from 'react';
import Wrapper from '@/components/Wrapper';

const MissionSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32 font-montserrat">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-center sm:text-left">

          <div className="lg:col-span-2 font-medium text-headline-medium">
            <h3 className="uppercase tracking-wider text-primary-base">
              Founded
            </h3>
            <p className=" text-black mt-2">
              2025
            </p>
          </div>

          <div className="lg:col-span-3 text-headline-medium font-medium">
            <h3 className=" uppercase tracking-wider text-primary-base">
              Our Mission
            </h3>
            <p className="text-body-large text-black mt-4">
              NaijaSpora is on a mission to protect, guide, and empower Nigerians through every step of their relocation and diaspora journey.
            </p>
          </div>

          <div className="lg:col-span-7 text-headline-medium font-medium">
            <h2 className=" text-primary-base">
              Why Choose NaijaSpora?
            </h2>
            <div className="prose prose-lg max-w-none text-secondary-on_secondary_container mt-4">
              <p>
                When we started NaijaSpora, it wasn&apos;t just about visas or paperwork — it was about protecting dreams. We saw too many Nigerians fall victim to fraud, disinformation, or poor preparation while trying to relocate. Some lost money. Others lost opportunities. A few lost hope.
              </p>
              <p>
                In 2025, we launched NaijaSpora with a simple but urgent goal:
              </p>
              <p>
                To build a relocation system that Nigerians can trust.
              </p>
              <p>
                With fake agents everywhere and rejection rates climbing, we created an ecosystem where verified services, AI tools, expert guidance, and community come together. Whether you&apos;re applying for a visa, looking for funds, or just got denied — NaijaSpora is your compass.
              </p>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default MissionSection;