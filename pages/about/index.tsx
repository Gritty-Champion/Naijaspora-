import type { NextPage } from 'next'
import AboutHero from '@/components/about/AboutHero'
import Header from '@/components/Header'
import MissionSection from '@/components/about/MissionSection'
import VisionStatement from '@/components/about/VisionStatement'
import CoreValues from '@/components/about/CoreValues'
import CtaSection from '@/components/about/CtaSection'

import Footer from '@/components/Footer'

const AboutPage: NextPage = () => {
    return (
        <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />

            <main className=''>
                <AboutHero />
                <MissionSection />
                <VisionStatement />
                <CoreValues />
                <CtaSection />

                <Footer />
                
                </main>
        </div>
    )
}

export default AboutPage